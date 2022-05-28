import React from 'react';
import { useForm } from 'react-hook-form';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imageStoragekey = 'b590bbba05b66d7bd730e0d531944391'


    const onSubmit = data => {
        const image = data.images[0];
        console.log(data)
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const image = data.data.url
                    const product = {
                        name: data.data.name,
                        description: data.data.description,
                        price: data.data.price,
                        minimumQuantity: data.data.minimumQuantity,
                        availableQuantity: data.data.availableQuantity,
                        image: image
                    }
                    // send to bakend

                    fetch('http://localhost:5000/part', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product is Add Success Fully')
                                reset();
                            }
                        })
                }
            })



    }
    return (
        <div>
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>Add A Product </h1>
            <div className="flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <h1 className='text-center text-xl'>Add Product</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} >


                            <input
                                type="text"
                                placeholder="Enter Product Name"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product Name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='text-red-500'><small>{errors.name.message}</small></span>}
                            </label>
                            <input
                                type="text"
                                placeholder='Product Description'
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Product Description is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className='text-red-500'><small>{errors.description.message}</small></span>}
                            </label>
                            <input
                                type="number"
                                placeholder='Enter Product Price'
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Product Price is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className='text-red-500'><small>{errors.price.message}</small></span>}
                            </label>
                            <input

                                type="number"
                                placeholder='Minimum Quantity'
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("minimumQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order is Required'
                                    }

                                })} />
                            <label className="label">
                                {errors.minimumQuantity?.type === 'required' && <span className='text-red-500'><small>{errors.minimumQuantity.message}</small></span>}

                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.availableQuantity?.type === 'required' && <span className='text-red-500'><small>{errors.availableQuantity.message}</small></span>}
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("images", {
                                    required: {
                                        value: true,
                                        message: ' Product Image is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className='text-red-500'><small>{errors.images.message}</small></span>}
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