import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import useImg from '../../../images/user.jpg'
import Loading from '../../../ShearedPages/Loading/Loading';
const MyProfile = () => {
    const [user, userLoading] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const education = data.education;
        const location = data.location;
        const phone = data.phone;
        const linkedIn = data.linkedIn;
        const userInformation = {
            name: name,
            email: email,
            education: education,
            location: location,
            phone: phone,
            linkedIn: linkedIn
        }
        fetch(`https://arcane-wave-36382.herokuapp.com/profile`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        reset();

    }
    if (userLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>My Profile</h1>
            <div className=" p-5 mb-5">
                <div className="card w-96 bg-base-100 shadow-xl p-5">
                    <div className="flex justify-between">
                        <div className="p-5 text-primary">
                            <h4>{user?.displayName}</h4>
                            <p><small>{user?.email}</small></p>
                        </div>
                        <div className="avatar p-5 ">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL ? user?.photoURL : useImg} alt={user?.displayName} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                value={user?.displayName}
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("name")} />
                            <label className="label">

                            </label>
                            <input
                                type="email"
                                value={user?.email}
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("email")} />
                            <label className="label">

                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Education"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: ' Education is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className='text-red-500'><small>{errors.education.message}</small></span>}
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Location"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className='text-red-500'><small>{errors.location.message}</small></span>}
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Your Phone Number"
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
                                placeholder="Enter Your LinkedIn Profile Link"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'LinkedIn is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.linkedIn?.type === 'required' && <span className='text-red-500'><small>{errors.linkedIn.message}</small></span>}

                            </label>
                            <button className="btn btn-outline btn-primary w-full max-w-xs">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;