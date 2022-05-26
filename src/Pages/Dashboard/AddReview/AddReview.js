import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const review = {
            name: data.name,
            email: data.email,
            rating: data.rating,
            description: data.description
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json(data))
            .then(data => {
                console.log(data)
                if (data.success === true) {
                    toast.success('You Review Will Be Add Success Fully');
                }
                else if (data.success === false) {
                    toast.error('Your Review is All ready exists')
                }
            })
        reset();
    };



    return (
        <div>
            <div className="flex justify-center items-center m-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-5 border-2 p-9">
                        <h1 className='text-xl text-primary'>ADD YOUR REVIEW</h1>
                        <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs" />
                        <input {...register("email", { required: true })} type="email" placeholder='Your Email' className="input input-bordered input-accent w-full max-w-xs " />
                        <input  {...register("rating", { required: true })} type="number" min={1} placeholder="Your Ratings" className="input input-bordered input-accent w-full max-w-xs" />
                        <textarea type="text" {...register("description", { required: true })} className="textarea textarea-accent" placeholder="Description" />
                        <input type="submit" className='btn btn-outline btn-primary w-full max-w-xs' value="Add Review" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;