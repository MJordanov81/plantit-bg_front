import React from 'react';

import {Col, Row, Grid} from 'react-bootstrap';
import {ToastContainer} from 'react-toastr';


// Partials
import ProductCard from './partials/ProductCard';


// Services
import productsService from '../../../../services/products/productsService';
import categoryService from '../../../../services/categories/categoryService';


// Constants
import {RESOLUTIONS} from '../../../../data/constants/componentConstants';
import {LABELS_BG} from '../../../../data/constants/componentConstants';
import settingsService from "../../../../services/settings/settingsService";

class FilterObject {
    constructor() {
        this.original = [];
        this.selected = [];
        this.matched = [];
    }
}

class ProductsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],

            categories: new FilterObject(),
            subcategories: new FilterObject(),

            size: 1000,
            page: 1,
            sortProperty: 'name',
            descending: false,
            filterProperty: 'name',
            filterValue: '',

            resolution: window.innerWidth,

            loading: true,
            filtering: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('orientationchange', this.handleResolutionChange);
        window.addEventListener('resize', this.handleResolutionChange);

        this.loadProducts();

        this.loadCategories();
    }

    componentWillUnmount() {
        window.removeEventListener('orientationchange', this.handleResolutionChange);
        window.removeEventListener('resize', this.handleResolutionChange);
    }

    handleResolutionChange = () => {
        this.setState({resolution: window.innerWidth});
    };

    loadCategories = () => {
        categoryService
            .loadCategories(null, false)
            .then(res => {

                    let categories = Object.assign({}, this.state.categories);      //creating copy of object
                    categories.original = res;                                      //updating value
                    this.setState({categories});

                    categoryService
                        .loadCategories(null, true)
                        .then(res => {
                            let subcategories = Object.assign({}, this.state.subcategories);      //creating copy of object
                            subcategories.original = res;                                      //updating value
                            this.setState({subcategories});
                            this.loadProducts();
                        })
                }
            )
            .catch(err => console.log(err))
    };

    loadProducts = () => {
        this.setState({filtering: true});

        productsService
            .loadProducts(this.state)
            .then(res => {

                res.products.forEach(e => e.images.reverse());
                this.setState({
                    products: res.products,
                    loading: false,
                    filtering: false
                });

                let categories = Object.assign({}, this.state.categories);
                categories.matched = res.categories;

                let subcategories = Object.assign({}, this.state.subcategories);
                subcategories.matched = res.subcategories;

                this.setState({categories, subcategories});

            })
            .catch(err => {
                this.props.history.push('/error');
            });
    };

    selectFilterCategory = (e) => {

        let stateProp = e.target.getAttribute('name');

        let id = e.target.getAttribute('id');


        if (this.state[stateProp].selected.includes(id)) {

            let selectedStateProp = Object.assign({}, this.state[stateProp]);
            let test = selectedStateProp.selected.filter(e => e !== id);
            selectedStateProp.selected = test;
            this.setState({[stateProp]: selectedStateProp});

        } else {

            let selectedStateProp = Object.assign({}, this.state[stateProp]);
            selectedStateProp.selected.push(id);
            this.setState({[stateProp]: selectedStateProp});
        }

        setTimeout(() => {
            this.loadProducts();
        }, 2000)
    };


    render() {

        let showOutOfStock = settingsService.getCurrentSetting('ShowOutOfStock');

        if (this.state.loading) return <div className='loader'/>;


        let resolution = this.state.resolution < RESOLUTIONS.xs;

        let productsList = this.state.products.map(e => {
            return <ProductCard key={e.id}
                                data={e}
                                showOutOfStock={showOutOfStock}
                                toastContainer={this.toastContainer}
                                xsRes={resolution ? 12 : 6}/>;
        });


        let categories = this.state.categories.original.map(c => {

            if (c.name === 'Default') return;

            let catStyle = this.state.categories.matched.map(e => e.id).includes(c.id) ? 'category' : 'category disabled';

            let style = this.state.categories.selected.includes(c.id) ? 'check-box selected' : 'check-box';

            return <div key={c.id} className={catStyle}>
                <span className={style}/>{c.name}
                <span className="over"
                      id={c.id}
                      name="categories"
                      onClick={this.selectFilterCategory}/>
            </div>
        });


        let subCategories = this.state.subcategories.original.map(sc => {

            let catStyle = this.state.subcategories.matched.map(e => e.id).includes(sc.id) ? 'category' : 'category invisible';


            let style = this.state.subcategories.selected.includes(sc.id) ? 'check-box selected' : 'check-box';

            return <div key={sc.id} className={catStyle}>
                <span className={style}/>{sc.name}
                <span className="over"
                      id={sc.id}
                      name="subcategories"
                      onClick={this.selectFilterCategory}/>
            </div>
        });


        return (
            <div id="products" className="container-fluid">

                <ToastContainer
                    ref={ref => this.toastContainer = ref}
                    className="toast-bottom-right"/>


                    <Col xs={12} md={3} lg={2}>
                        <aside>
                            <div className="filters-container">
                                <h4 className="category-name">{LABELS_BG.category}</h4>
                                {categories}
                            </div>

                            <div className="filters-container">
                                <h4 className="category-name">{LABELS_BG.subcategory}</h4>
                                {subCategories}
                            </div>
                        </aside>
                    </Col>


                    <Col xs={9}  md={9} lg={10}>
                        <Row>
                            {this.state.filtering &&
                            <div className="loader"/>
                            }
                            {!this.state.filtering &&
                            productsList
                            }
                        </Row>
                    </Col>
            </div>
        );
    }
}

export default ProductsList;