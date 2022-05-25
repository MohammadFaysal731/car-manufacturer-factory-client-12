import React from 'react';
import ContactMe from '../../ContactMe/ContactMe';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Subscription from '../Subscription/Subscription';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <ContactMe></ContactMe>
            <BusinessSummary></BusinessSummary>
            <Subscription></Subscription>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;