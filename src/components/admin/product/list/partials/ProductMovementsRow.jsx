import React from 'react';

//constants
import {PRODUCT_MOVEMENTS} from "../../../../../data/constants/componentConstants";

import Utils from "../../../../../utils/utils";

class ProductMovementsRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let m = this.props.data;

        return (

                <tr className="text-center">
                    <th>
                        {PRODUCT_MOVEMENTS[m.movementType]}
                    </th>
                    <th>
                        {Utils.formatDate(m.timeStamp)}
                    </th>
                    <th>
                        {m.quantity}
                    </th>
                    <th>
                        {m.comment}
                    </th>
                </tr>


        );
    }
}

export default ProductMovementsRow;
