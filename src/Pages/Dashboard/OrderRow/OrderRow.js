import React from 'react';

const OrderRow = ({ order, index, setDeleteConfirm }) => {
    const { productName, productQuantity } = order;

    return (
        <tr className='uppercase'>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{productQuantity}/Pcs</td>
            <td>
                <label onClick={() => setDeleteConfirm(order)} for="my-modal-6" className=" btn-xs btn-primary btn-outline btn modal-button">Delete</label>
            </td>
            <td><button className="btn btn-xs btn-primary btn-outline">Pay</button></td>
        </tr>
    );
};

export default OrderRow;