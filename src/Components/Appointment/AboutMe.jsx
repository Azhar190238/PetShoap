import React from 'react';
import BannerAppoinment from './BannerAppoinment';
import Benefit from './Benefit';
import FAQ from './FAQ';
import AboutMeAppoinment from './AboutMeAppoinment';

const AboutMe = () => {
    return (
        <div>
            <BannerAppoinment></BannerAppoinment>
           <AboutMeAppoinment></AboutMeAppoinment>
            <Benefit></Benefit>
            <FAQ></FAQ>
        </div>
    );
};

export default AboutMe;