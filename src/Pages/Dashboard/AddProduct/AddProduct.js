import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);
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

    }
    return (
        <div>
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>Add A Product </h1>
            <div className="flex justify-center items-center">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <h1 className='text-center text-xl'>Add Product</h1>
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input
                                type="text"
                                value={user.displayName}
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
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
                                autoComplete='off'
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
                                autoComplete='off'
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
                                autoComplete='off'
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
                                autoComplete='off'
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
                                autoComplete='off'
                                {...register("productQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order is 100 pcs'
                                    }

                                })} />
                            <label className="label">
                                {errors.productQuantity?.type === 'required' && <span className='text-red-500'><small>{errors.productQuantity.message}</small></span>}

                            </label>
                            <button className="btn btn-outline btn-primary w-full max-w-xs">Add Product<BiPurchaseTagAlt className='text-lg m-2'></BiPurchaseTagAlt></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;