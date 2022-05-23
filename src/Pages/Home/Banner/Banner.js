import React from 'react';
import banner from '../../../images/banner.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-md rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">WellCome To Our Car Manufacturer Factory</h1>
                    <p class="py-6">
                        we make  all parts of car.We are supplied our car parts in every country.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;