import React from 'react';
import Footer from '../../../ShearedPages/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts/Parts';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;