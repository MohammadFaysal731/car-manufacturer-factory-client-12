import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../ShearedPages/Loading/Loading';
const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeliver = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('DELIVER IS DONE SUCCESS FULLY');
                refetch();
            })
    }

    return (
        <div>
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>Manage All Orders </h1>
            <div className="overflow-x-auto">
                <table className="table w-full ">

                    <thead>
                        <tr className='text-primary'>
                            <th>SL</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Buyer Phone</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Deliver</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr
                                className='text-primary hover'
                                order={order}
                                key={order._id}
                                index={index}
                                refetch={refetch}
                            >
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.productName}</td>
                                <td>{order.productQuantity}</td>
                                <td><button onClick={() => handleDeliver(order._id)} className="btn btn-xs btn-outline btn-primary">Deliver</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;