import React from 'react';

import {PRODUCT_MOVEMENTS} from "../../../../../data/constants/componentConstants";

class AddMovementForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {addMovement, onChange} = this.props;

        let options = [];

        for (var key in PRODUCT_MOVEMENTS) {

            options[key] = <option key={key} value={key}>{PRODUCT_MOVEMENTS[key]}</option>
        }

        return (
            <form>
                <label>Тип движение:
                    <select id="comment" name="movementType" onChange={onChange}>
                        <option>Изберете...</option>
                        {options}
                    </select>
                </label>
                <label>Дата:
                    <input id="timeStamp" type="date" name="timeStamp" onChange={onChange}/>
                </label>
                <label>Количество:
                    <input id="quantity" type="number" name="quantity" onChange={onChange}/>
                </label>
                <label>Коментар:
                    <input id="comment" type="text-area" name="comment" onChange={onChange}/>
                </label>
                <input type="submit" value="Създай" onClick={addMovement}/>
            </form>
        );
    }
}

export default AddMovementForm;
