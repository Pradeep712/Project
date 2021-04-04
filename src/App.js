import React from 'react'
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <img alt="Ventuno Technologies"
                src="https://www.ventunotech.com/static/assets/image/vtn_logo_vaithee.png" />
            <h1>Test Project for Developing Carousel from JSON using ReactJs</h1>
            <Carousel />
        </div>
    )
};