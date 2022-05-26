import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../ShearedPages/Loading/Loading';
import OrderRow from '../OrderRow/OrderRow';




const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user?.email])

    if (loading) {
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
                            orders.map((order, index) => <OrderRow
                                order={order}
                                key={order._id}
                                index={index}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;