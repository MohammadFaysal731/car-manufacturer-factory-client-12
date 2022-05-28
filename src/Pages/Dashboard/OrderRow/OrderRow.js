import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteConfirm }) => {
    const { _id, productName, productQuantity, price, paid } = order;


    return (
        <tr className='uppercase text-primary hover'>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{productQuantity}/Pcs</td>
            <td>
                <label onClick={() => setDeleteConfirm(order)} for="my-modal-6" className=" btn-xs btn-primary btn-outline btn modal-button">Delete</label>
            </td>
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`} className="btn btn-xs btn-primary btn-outline">Pay</Link>}
                {(price && paid) && <span className='text-success'>Paid</span>}
            </td>
        </tr>
    );
};

export default OrderRow;