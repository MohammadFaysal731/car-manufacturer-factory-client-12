import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    let googleSignError;

    useEffect(() => {
        if (googleUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, navigate, location, from])
    if (googleLoading) {
        return <Loading></Loading>
    }
    if (googleError) {
        googleSignError = <p className='text-red-500'><small>{googleError.message}</small></p>
    }
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">

                <div className="divider">OR</div>
                {googleSignError}
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-full max-w-xs"><FcGoogle className='text-lg m-2'></FcGoogle>Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;