import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../ShearedPages/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1lD1Dhy3FUudtrZ47jK2dzc5JsfxJSzyOsY50DQZ7EEIgGtLlGRsxKNRWxrwV2G4cFH7c1ZCNpk7mOX4faKu9B00VF1KDwlB');
const Payment = () => {
    const { id } = useParams();

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`http://localhost:5000/order/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div >
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>Payment For Your Product</h1>

            <div class="card w-96 bg-base-100 shadow-xl m-5">
                <div class="card-body">
                    <h1 className='text-primary'>Helle, {order?.name} Please Pay for </h1>
                    <h2 class="card-title">{order?.productName}</h2>
                    <p>${order?.price}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <div class="card-body m-4 ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;