import React from 'react';
import Banner from '../Banner/Banner';
import LookingFor from '../../LookingFor/LookingFor';
import FeaturedPost from '../../FeaturedPost/FeaturedPost';
import ShopPate from '../../ShopPate/ShopPate';
import PerfectService from '../../PerFectService/PerfectService';
import FeaturedService from '../../FeaturedService/FeaturedService';
import PopularBread from '../../PopularBread/PopularBread';
import HealthService from '../../HealthServices/HealthService';

const HomePage = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedPost></FeaturedPost>
           <FeaturedService></FeaturedService>
           <PopularBread></PopularBread>
           <LookingFor></LookingFor>
           <ShopPate></ShopPate>
           <PerfectService></PerfectService>
           <HealthService></HealthService>
        </div>
    );
};

export default HomePage;