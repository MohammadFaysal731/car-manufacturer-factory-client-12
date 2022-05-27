import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../ShearedPages/Loading/Loading';
import SocialLogin from '../../../ShearedPages/SocialLogin/SocialLogin';
import useUser from '../../../hooks/useUser';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [users] = useUser(emailUser);

    let signInError;


    useEffect(() => {
        if (users) {
            navigate(from, { replace: true });
        }
    }, [users, navigate, location, from])

    if (emailLoading || updating) {
        return <Loading></Loading>
    }

    if (emailError || updateError) {
        signInError = <p className=' text-red-500'><small>{emailError?.message}</small></p>
    }

    const onSubmit = async (data) => {
        console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="form-control w-full max-w-xs shadow-xl  rounded-xl m-5 p-5">
                <h1 className='text-xl text-primary text-center m-5'>Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
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
                        placeholder="Enter Your Email"
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
                        type="password"
                        placeholder="Enter Your Password"
                        className="input input-bordered w-full max-w-xs"
                        autoComplete='off'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password should be minimum character'
                            }
                        })} />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className='text-red-500'><small>{errors.password.message}</small></span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500'><small>{errors.password.message}</small></span>}
                    </label>
                    {signInError}
                    <button className="btn btn-outline btn-primary w-full max-w-xs">Registration<FiLogIn className='text-lg m-2'></FiLogIn></button>
                    <p><small>Already have an account Please? <Link to='/login' className='text-primary'>Login</Link></small></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>

    );
};

export default Registration;