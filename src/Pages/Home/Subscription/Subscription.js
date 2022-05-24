import React from 'react';
import discount from '../../../images/discoutn.png'
const Subscription = () => {
    return (
        <div className="" >
            <h1 className='text-4xl text-center text-primary font-bold m-5'><u>OUR SPECIAL OFFER</u></h1>
            <div className="hero min-h-screen " style={{ background: `url(${discount})` }}>
                <div className="hero-overlay bg-opacity-80 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md font-bold text-white">
                        <h1 className="mb-5 text-4xl ">HELLO VIEWERS</h1>
                        <p className="mb-5 text-2xl font-bold">SPECIAl OFFER FOR SUBSCRIPTION</p>
                        <p className="mb-5">GET INSTANT DISCOUNT FOR MEMBERSHIP
                        </p>
                        <p className="mb-5">   Subscribe our newsletter and all latest news of our
                            latest product, promotion and offers</p>
                        <div className="form-control ">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered w-96" />
                                <button className="btn btn-square bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    );
};

export default Subscription;
