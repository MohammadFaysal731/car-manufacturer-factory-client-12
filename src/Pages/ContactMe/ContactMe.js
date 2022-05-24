import React from 'react';
import owner from '../../images/owner.jpg'
const ContactMe = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen">
                <div class="hero-overlay bg-opacity-60">
                    <p className='text-4xl text-center text-primary font-bold m-10'>CONTACT ME</p>
                    <p className='text-4xl text-center text-primary font-bold'>I'LL BE GLAD TO ANSWER YOUR QUESTION ?</p>
                </div>
                <div class="hero-content  text-neutral-content">
                    <div class="max-w-md m-10">
                        <div className="">
                            <img src={owner} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 border-2 p-9">
                        <input type="text" placeholder="Name" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Email Address" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Subject" class="input input-bordered input-accent w-full max-w-xs" />
                        <textarea class="textarea textarea-accent" placeholder="Your Message"></textarea>
                        <input className='btn btn-outline btn-primary w-full max-w-xs' type="submit" value="submit" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;