import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../../ShearedPages/Loading/Loading';
import OrderRow from '../OrderRow/OrderRow';




const MyOrders = () => {
    const [user, userLoading] = useAuthState(auth);

    const { data: orders, isLoading, refetch } = useQuery(['orders', user?.email], () => fetch(`http://localhost:5000/order?email=${user?.email}`, {}).then(res => res.json()))

    if (userLoading || isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <h1 className='text-center text-primary text-2xl m-5'>MyOrders</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
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
                                refetch={refetch}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default MyOrders;