import React from 'react'
import audi from "../assets/images/audiA4.jpg"
import bmw from "../assets/images/BMW3.jpg"
import ford from "../assets/images/focus_rs.jpg"
import ImageSlider from '../components/imageSlider/ImageSlider';
import MainInfo from '../components/mainInfo/MainInfo';
import Details from '../components/Details/Details';
import Description from '../components/Description/Description';

const images = [audi,bmw,ford];

const AnnouncmentPage = () => {
  return (
    <div className="announcment">
    <section className='announcment__top-information'>
    <ImageSlider imageUrls={images}></ImageSlider>
    <Details></Details>
    <hr className='divider' />
    <Description></Description>
    </section>
    <section className="announcment__main-info">
    <MainInfo></MainInfo>
    </section>
    </div>
  )
}

export default AnnouncmentPage