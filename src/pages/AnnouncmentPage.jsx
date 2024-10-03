import React from 'react'
import audi from "../assets/images/audiA4.jpg"
import bmw from "../assets/images/BMW3.jpg"
import ford from "../assets/images/focus_rs.jpg"
import ImageSlider from '../components/ImageSlider';
import MainInfo from '../components/MainInfo';

const images = [audi,bmw,ford];

const AnnouncmentPage = () => {
  return (
    <section className='announcment__top-information'>
    <ImageSlider imageUrls={images}></ImageSlider>
    <MainInfo></MainInfo>
    </section>
  )
}

export default AnnouncmentPage