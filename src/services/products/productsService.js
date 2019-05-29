import requesterService from '../requester';
const endPoint = '/products';
const auth = 'admin';

class FilterObject {
    constructor() {
        this.original = [];
        this.selected = [];
        this.matched = [];
    }
}

export default {

	loadProducts: (state, includeBlocked = false) => {

		if(state.categories==null) state.categories= new FilterObject();
		if(state.subcategories==null) state.subcategories= new FilterObject();

		let query =
			'?page=' + state.page +
			'&size=' + state.size +
			'&filterElement=' + state.filterProperty +
			'&filterValue=' + state.filterValue +
			'&sortElement=' + state.sortProperty +
			'&sortDesc=' + state.descending +
			'&includeBlocked=' + includeBlocked +
			'&categoriesString=' + state.categories.selected.join(',') +
			'&subcategoriesString=' + state.subcategories.selected.join(',');

		return requesterService
			.get(endPoint, null, query);
	},

	loadMovements: (productId) => {
		let endPointId = endPoint + `/movement/${productId}`;

		return requesterService
			.get(endPointId, auth);
	},

	addMovement: (state) => {
		let movement = generateMovementDetails(state);

		let currentEndPoint = endPoint + '/movement';

		return requesterService
			.post(currentEndPoint, auth, movement);
	},

	addProduct: (state) => {

		let product = generateProductDetails(state);

		return requesterService
			.post(endPoint, auth, product);
	},

	getProduct: (id) => {

		let endPointId = endPoint + `/${id}`;

		return requesterService
			.get(endPointId, null);
	},

	updateProduct: (state, id) => {

		let endPointId = endPoint + '/' + id;

		let product = generateProductDetails(state);

		product.IsBlocked = state.isBlocked;

		return requesterService
			.update(endPointId, auth, product);
	},

	seedProducts: (product) => {

		return requesterService
			.post(endPoint, null, product);
	}
};

function generateProductDetails (state) {

	return {
		Name: state.name,
		Description: state.description,
		DetailsLink: state.detailsLink,
		Price: state.price,
		ImageUrls: state.imageUrls,
		IsTopSeller: state.isTopSeller,
		Categories: state.selectedCategories.map(c => c.value),
		Subcategories: state.selectedSubcategories.map(sc => sc.value)
	};
}

function generateMovementDetails (state) {


	return {
		Comment: state.comment,
		Quantity: state.quantity,
		TimeStamp: state.timeStamp,
		MovementType: state.movementType,
		ProductId: state.product.id
	};
}
