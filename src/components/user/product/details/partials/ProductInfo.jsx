import React from 'react';

import { Row, Col, PageHeader, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { PRODUCT, CURRENCY } from '../../../../../data/constants/componentConstants';

class ProductInfo extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		const p = this.props.data;

		return (
			<Row>
				<Col xs={12}>
					<PageHeader>
						{p.discount > 0 &&
						<span className="promo-label">-{p.discount}%</span>
						}
						{p.name + ' (кат. номер 1' + ('' + p.number).padStart(5, '0') + ')'}
					</PageHeader>
					<p>{p.description}</p>

													
					{p.detailsLink &&
					<Link className="btn-custom primary md" to={p.detailsLink}>Детайли за продукта</Link>}	

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