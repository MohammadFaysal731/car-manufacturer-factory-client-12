import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div class="form-control w-full max-w-xs">
                <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text-alt">Alt label</span>
                </label>
                <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text-alt">Alt label</span>
                </label>
                <button class="btn btn-outline btn-primary">Login</button>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} />
                    {errors.firstName?.type === 'required' && "First name is required"}

                    <input {...register("lastName", { required: true })} />
                    {errors.lastName && "Last name is required"}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;