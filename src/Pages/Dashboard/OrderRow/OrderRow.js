import React from 'react';

const OrderRow = ({ order, index }) => {
    const { productName, productQuantity } = order;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{productQuantity}/Pcs</td>
            <td><button className="btn btn-xs btn-primary btn-outline">Delete</button></td>
            <td><button className="btn btn-xs btn-primary btn-outline">Pay</button></td>
        </tr>
    );
};

export default OrderRow;