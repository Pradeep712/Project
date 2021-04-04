/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { Carousel } from "react-responsive-carousel";
import 'react-multi-carousel/lib/styles.css';
import images from './image.json'

export default function () {
    return (
        <div>
            <Carousel autoPlay>
                {images.map(image => {
                    return (
                        <img src={image.url} alt={image.name} />                    
                    )}
                )}
            </Carousel> 
    </div>
    )
}