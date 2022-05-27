import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../../ShearedPages/Loading/Loading';
import Modal from '../Modal/Modal';
import OrderRow from '../OrderRow/OrderRow';




const MyOrders = () => {
    const [user, userLoading] = useAuthState(auth);

    const [deleteConfirm, setDeleteConfirm] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery(['orders', user?.email], () => fetch(`http://localhost:5000/order?email=${user?.email}`, {}).then(res => res.json()))

    if (userLoading || isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <h1 className='text-center text-primary text-2xl m-5 uppercase'>My Orders</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-primary'>
                            <th>Sl</th>
                            <th>Product</th>
                            <th>Product Quantity</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderRow
                                order={order}
                                key={order._id}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <Modal deleteConfirm={deleteConfirm} refetch={refetch} setDeleteConfirm={setDeleteConfirm}></Modal>
            }

        </div>
    );
};

export default MyOrders;