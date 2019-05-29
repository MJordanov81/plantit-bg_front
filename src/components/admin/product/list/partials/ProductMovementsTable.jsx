import React from 'react';

import ProductMovementRow from "./ProductMovementsRow";
import productsService from "../../../../../services/products/productsService";
import {TOASTR_MESSAGES} from "../../../../../data/constants/componentConstants";
import {Grid, Table} from "react-bootstrap";
import AddMovementForm from "./AddMovementForm";
import {ToastContainer} from "react-toastr";

let productId = "";

class ProductMovementsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
            movements: [],

            movementType: '',
            quantity: 0,
            comment: '',
            timeStamp: ''
        }
    }

    componentDidMount() {

        productId = this.props.match.params.id;

        this.loadMovements();


        this.loadProductDetails();
    }

    loadProductDetails = () => {

        productsService.getProduct(productId).then(res => {

                this.setState({product: res.product})
            }
        )
            .catch(err => {
                this.toastContainer.error(err.responseText, TOASTR_MESSAGES.error, {
                    closeButton: false,
                });
            });
    };

    loadMovements = () => {

        productsService
            .loadMovements(productId)
            .then(res => {

                this.setState({
                    movements: res,
                    loading: false
                });

            })
            .catch(err => {
                this.toastContainer.error(err.responseText, TOASTR_MESSAGES.error, {
                    closeButton: false,
                });
            });
    };

    onChange = (e) => {

        this.setState({[e.target.name]: e.target.value});
    };

    addMovement = (e) => {

        e.preventDefault();

        productsService.addMovement(this.state)
            .then(res => {

                this.setState({
                    comment: '',
                    quantity: 0,
                    timeStamp: '',
                    movementType: ''
                });

                window.location.reload();
            })
            .catch(err => {
            this.toastContainer.error(err.responseText, TOASTR_MESSAGES.error, {
                closeButton: false,
            });
        })
    };

    render() {

        let movements = [];

        let key = 0;

        if (this.state.movements.length > 0) {
            movements = this.state.movements.map(e => {
                return <ProductMovementRow key={key++} data={e}/>;
            });
        }

        return (
            <div>

                <ToastContainer
                    ref={ref => this.toastContainer = ref}
                    className="toast-bottom-right"
                />

                {this.state.product &&
                <h4>{this.state.product.name}</h4>}
                {this.state.product &&
                <h5>Наличност: {this.state.product.quantity}</h5>}

                <AddMovementForm
                onChange={this.onChange}
                addMovement={this.addMovement}
                />
                <Table striped bordered condensed hover id="admin-product-movements-table">
                    <thead>
                    <tr>
                        <th>
                            Вид движение
                        </th>
                        <th>
                            Дата
                        </th>
                        <th>
                            Количество
                        </th>
                        <th>
                            Коментар
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {movements}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProductMovementsTable;
