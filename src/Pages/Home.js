import React from 'react';
import HomePageComponents from '../Components/HomePageComponents/HomePageComponents';
import FindCategory from '../Components/HomePageComponents/FindCategory';
import TopProduct from '../Components/HomePageComponents/TopProduct';
import ProductFetures from '../Components/HomePageComponents/ProductFetures';
import ReviewSection from '../Components/HomePageComponents/ReviewSection';

const Home = () => {
    return (
        <div className='w-8/12 m-auto'>
            <HomePageComponents/>
           
            <FindCategory/>
            <TopProduct/>
            <ProductFetures/>
            <ReviewSection/>
        </div>
    );
};

export default Home;