import React from 'react';
import BannerAppoinment from './BannerAppoinment';
import FAQ from './FAQ';
import Benefit from './Benefit';
import BookAppoinment from './BookAppoinment';

const Appoinment = () => {
    return (
        <div >
            <BannerAppoinment></BannerAppoinment>
            <BookAppoinment></BookAppoinment>
            <Benefit></Benefit>
            <FAQ></FAQ>
        </div>
    );
};

export default Appoinment;