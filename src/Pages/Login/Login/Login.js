import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
const Login = () => {
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        // const email = data.email;
        // const password = data.password;
        // signInWithEmailAndPassword(email, password);
    };

    return (
        <div className='flex justify-center items-center mt-10'>
            <div class="form-control w-full max-w-xs shadow-xl  rounded-xl m-5 p-5">
                <h1 className='text-xl text-primary text-center m-5'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            }
                        })} />
                    <label class="label">
                        {errors.email?.type === 'required' && <span className='text-red-500'><small>{errors.email.message}</small></span>}
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        class="input input-bordered w-full max-w-xs"
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
                    <label class="label">
                        {errors.password?.type === 'required' && <span className='text-red-500'><small>{errors.password.message}</small></span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500'><small>{errors.password.message}</small></span>}
                    </label>
                    <button class="btn btn-outline btn-primary w-full max-w-xs">Login<FiLogIn className='text-lg m-2'></FiLogIn></button>
                    <small>Forgot Your Password ? </small>
                    <p><small>New To Car Parts Please? <Link to='/registration' className='text-primary'>Registration</Link></small></p>

                </form>
            </div>
        </div>
    );
};

export default Login;