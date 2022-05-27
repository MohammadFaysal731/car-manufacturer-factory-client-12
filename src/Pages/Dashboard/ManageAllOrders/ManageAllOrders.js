import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../ShearedPages/Loading/Loading';
const ManageAllOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>Manage All Orders </h1>
            <div class="overflow-x-auto">
                <table class="table w-full ">

                    <thead>
                        <tr className='text-primary '>
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
                                order={order}
                                key={order._id}
                                index={index}
                            >
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.productName}</td>
                                <td>{order.productQuantity}</td>
                                <td><button class="btn btn-xs btn-outline btn-primary">Deliver</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;