import React from 'react';

import {Row, Col, PageHeader, Label, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';


import {PRODUCT, CURRENCY} from '../../../../../data/constants/componentConstants';
import SortablePartners from "../../../../admin/partner/list/partials/SortablePartners";

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const p = this.props.data;

        let availableQuantity = p.quantity === 1 ?
            <span className="stock-only-one-left">
            остава само {p.quantity}
            </span> :
            <span className="stock-more-than-one-left">
                {p.quantity}
            </span>;

        let stock = p.quantity === 0 ?
            <span className="out-of-stock">
                Изчерпан
            </span> :
            <span>
                {availableQuantity}
            </span>;

        return (
            <Row>
                <Col xs={12}>
                    <PageHeader>
                        {p.discount > 0 &&
                        <span className="promo-label">-{p.discount}%</span>
                        }
                        {p.name}<Badge color="info">{'# 1' + ('' + p.number).padStart(5, '0')}</Badge>
                        <div className='stock-label'>Наличност: {stock}</div>
                    </PageHeader>
                    <br/>
                    <p>{p.description}</p>

                    {p.discount === 0 &&
                    <p>{PRODUCT.price} <span className="price">{p.price.toFixed(2)} {CURRENCY}</span></p>}

                    {p.discount > 0 &&
                    <p>
                        {PRODUCT.price}
                        <span className="old-price">{p.price.toFixed(2)} {CURRENCY}</span>
                        <span className="price">{(p.price - p.discount / 100 * p.price).toFixed(2)} {CURRENCY}</span>
                    </p>
                    }


                </Col>


            </Row>
        );
    }
}

export default ProductInfo;