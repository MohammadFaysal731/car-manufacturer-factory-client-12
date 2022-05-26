import React from 'react';
import { useForm } from 'react-hook-form';
import owner from '../../images/owner.jpg'
const ContactMe = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const information = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            description: data.description

        }
        reset()
    }
    return (
        <div className=''>
            <p className='text-4xl text-center text-primary font-bold m-10'>CONTACT ME</p>
            <p className='text-4xl text-center text-primary font-bold'>I'LL BE GLAD TO ANSWER YOUR QUESTION ?</p>
            <div className="hero min-h-screen hero-overlay bg-opacity-60">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={owner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className="flex justify-center items-center m-5">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 gap-5 border-2 p-9">
                                <h1 className='text-xl text-primary'>ADD YOUR INFORMATION</h1>
                                <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs" />
                                <input {...register("email", { required: true })} type="email" placeholder='Your Email' className="input input-bordered input-accent w-full max-w-xs " />
                                <input  {...register("subject", { required: true })} type="text" placeholder="Your Subject" className="input input-bordered input-accent w-full max-w-xs" />
                                <textarea type="text" {...register("description", { required: true })} className="textarea textarea-accent" placeholder="Description" />
                                <input type="submit" className='btn btn-outline btn-primary w-full max-w-xs' value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactMe;