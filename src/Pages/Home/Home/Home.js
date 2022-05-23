import React from 'react';
import Footer from '../../../ShearedPages/Footer/Footer';
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
            <BusinessSummary></BusinessSummary>
            <Subscription></Subscription>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;