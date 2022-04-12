import React from 'react';
import Services from '../Services/Services';
import Experts from './Experts/Experts';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;