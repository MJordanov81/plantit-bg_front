import requesterService from '../requester';

const endPoint = '/settings';
const auth = 'admin';

export default {

    load: () => {

        return requesterService.get(endPoint, null);
    },

    getCurrentSetting: (settingName) => {

        let apiSettings = JSON.parse(sessionStorage.getItem('apiSettings'));

        return apiSettings[settingName];
    },

    edit: (state) => {

        console.log(state);

        let data = generateSettingsDetails(state);

        return requesterService.update(endPoint, auth, data);
    },

};

function generateSettingsDetails(state) {

    return {
        ShowOutOfStock: state.showOutOfStock
    };
}

