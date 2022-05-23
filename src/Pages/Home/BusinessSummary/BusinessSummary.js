import React from 'react';
import { FcCustomerSupport } from 'react-icons/fc';
import { HiCurrencyBangladeshi } from 'react-icons/hi';
import { MdOutlineRateReview } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-bold'><u>Business Summary</u></h1>
            <h4 className='text-center m-4 text-3xl'>Our Business Trust</h4>
            <p className='text-center text-primary font-bold'>Try To Understand Our Users Expectation</p>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-5">
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title text-primary"><FcCustomerSupport className='text-6xl'></FcCustomerSupport></div>
                            <div class="stat-value">100+</div>
                            <div class="stat-desc text-xl">Served Customers</div>
                        </div>
                    </div>
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title text-primary"><HiCurrencyBangladeshi className='text-6xl'></HiCurrencyBangladeshi></div>
                            <div class="stat-value">120M+</div>
                            <div class="stat-desc text-xl">Annual Revenue</div>
                        </div>
                    </div>
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title text-primary"><MdOutlineRateReview className='text-6xl '></MdOutlineRateReview></div>
                            <div class="stat-value">33K+</div>
                            <div class="stat-desc text-xl"> Reviews</div>
                        </div>
                    </div>
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title text-primary"><FaTools className='text-6xl'></FaTools></div>
                            <div class="stat-value">50+</div>
                            <div class="stat-desc text-xl ">Tools</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;