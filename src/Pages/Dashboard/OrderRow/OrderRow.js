import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order, index, refetch }) => {
    const { _id, productName, productQuantity } = order;


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch(data);
                toast.success('Product Will Be Deleted Success Fully')
            });
    }

    return (
        <tr className='uppercase'>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{productQuantity}/Pcs</td>
            <td>

                <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary btn-outline">Delete</button>
            </td>
            <td><button className="btn btn-xs btn-primary btn-outline">Pay</button></td>
        </tr>
    );
};

export default OrderRow;