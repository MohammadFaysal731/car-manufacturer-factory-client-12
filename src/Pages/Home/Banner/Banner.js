import React from 'react';
import banner from '../../../images/banner.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-md rounded-lg shadow-2xl" alt={banner} />
                <div>
                    <h1 className="text-5xl font-bold">WellCome To Our Car Manufacturer Factory</h1>
                    <p className="py-6">
                        we make  all parts of car.We are supplied our car parts in every country.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;