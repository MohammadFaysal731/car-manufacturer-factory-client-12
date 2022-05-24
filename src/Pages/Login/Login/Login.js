import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../ShearedPages/Loading/Loading';
import SocialLogin from '../../../ShearedPages/SocialLogin/SocialLogin';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);
    let signInError;
    useEffect(() => {
        if (emailUser) {
            navigate(from, { replace: true });
        }
    }, [emailUser, navigate, location, from])
    if (emailLoading) {
        return <Loading></Loading>
    }

    if (emailError) {
        signInError = <p className=' text-red-500'><small>{emailError?.message}</small></p>
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="form-control w-full max-w-xs shadow-xl  rounded-xl m-5 p-5">
                <h1 className='text-xl text-primary text-center m-5'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
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
                        type="password"
                        placeholder="Enter Your Password"
                        className="input input-bordered w-full max-w-xs"
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
                    <button className="btn btn-outline btn-primary w-full max-w-xs">Login<FiLogIn className='text-lg m-2'></FiLogIn></button>
                    <small>Forgot Your Password ? </small>
                    <p><small>New To Car Parts Please? <Link to='/registration' className='text-primary'>Registration</Link></small></p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;