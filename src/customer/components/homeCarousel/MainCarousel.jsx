import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const items = mainCarouselData.map((item)=> <img src= {item.image}></img>)

const MainCarousel = () => {
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls 
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarousel