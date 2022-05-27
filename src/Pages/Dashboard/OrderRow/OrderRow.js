import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteConfirm }) => {
    const { productName, productQuantity } = order;


    return (
        <tr className='uppercase text-primary'>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{productQuantity}/Pcs</td>
            <td>
                <label onClick={() => setDeleteConfirm(order)} for="my-modal-6" className=" btn-xs btn-primary btn-outline btn modal-button">Delete</label>
            </td>
            <td><Link to="/dashboard/payment" className="btn btn-xs btn-primary btn-outline">Pay</Link></td>
        </tr>
    );
};

export default OrderRow;