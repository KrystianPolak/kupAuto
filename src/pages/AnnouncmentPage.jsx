import React from 'react'
import audi from "../assets/images/audiA4.jpg"
import bmw from "../assets/images/BMW3.jpg"
import ford from "../assets/images/focus_rs.jpg"
import ImageSlider from '../components/ImageSlider';

const images = [audi,bmw,ford];

const AnnouncmentPage = () => {
  return (
    <ImageSlider imageUrls={images}></ImageSlider>
  )
}

export default AnnouncmentPage