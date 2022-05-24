import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let googleSignError;
    if (googleLoading) {
        return <Loading></Loading>
    }
    if (googleUser) {
        navigate('/blogs')
    }
    if (googleError) {
        googleSignError = <p className='text-red-500'><small>{googleError.message}</small></p>
    }
    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50">

                <div class="divider">OR</div>
                {googleSignError}
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-full max-w-xs"><FcGoogle className='text-lg m-2'></FcGoogle>Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;