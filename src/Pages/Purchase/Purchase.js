import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
const Purchase = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const [purchase, setPurchase] = useState([]);
    const [user] = useAuthState(auth);

    const { images, name, description, minimumQuantity, availableQuantity, price } = purchase;

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => {
                setPurchase(data)
            })
    }, [id])



    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const address = data.address;
        const phone = data.phone;
        const productName = data.productName;
        const productQuantity = data.productQuantity;

        const orders = {
            name: name,
            email: email,
            address: address,
            phone: phone,
            productName: productName,
            productQuantity: productQuantity
        }
        console.log(orders)
        fetch(`http://localhost:5000/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    toast.success('Your Order Will Be done Success Fully')
                    reset();
                };
            })
    }

    return (
        <div className="">
            <div className="flex justify-center items-center">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="card w-96 bg-base-100 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img src={images} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p title={description}>{description?.length > 100 ? description.slice(0, 100) + '.....' : description}</p>
                            <p>Price:${price}</p>
                            <p>Minimum Order Quantity :{minimumQuantity}/Pcs</p>
                            <p>Available Quantity :{availableQuantity}/Pcs</p>
                        </div>
                    </div>
                    <div className="card-body  card w-96 bg-base-100 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                value={user.displayName}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='text-red-500'><small>{errors.name.message}</small></span>}
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='text-red-500'><small>{errors.email.message}</small></span>}
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className='text-red-500'><small>{errors.address.message}</small></span>}
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className='text-red-500'><small>{errors.phone.message}</small></span>}
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("productName", {
                                    required: {
                                        value: true,
                                        message: 'Product Name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.productName?.type === 'required' && <span className='text-red-500'><small>{errors.productName.message}</small></span>}
                            </label>
                            <input

                                type="number"
                                placeholder='Minimum Order 100 Pcs'
                                min={100}
                                max={10000}
                                className="input input-bordered w-full max-w-xs"
                                {...register("productQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order is 100 pcs'
                                    }

                                })} />
                            <label className="label">
                                {errors.productQuantity?.type === 'required' && <span className='text-red-500'><small>{errors.productQuantity.message}</small></span>}

                            </label>
                            <button className="btn btn-outline btn-primary w-full max-w-xs">Purchase<BiPurchaseTagAlt className='text-lg m-2'></BiPurchaseTagAlt></button>
                        </form>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default Purchase;