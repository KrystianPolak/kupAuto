import React from 'react'
import volvo from '../assets/images/S40.jpg'
import audi from '../assets/images/audiA4.jpg'
import bmw from '../assets/images/BMW3.jpg'
import ford from '../assets/images/focus_rs.jpg'

const HighlightedAnnouncments = () => {
  return (
    <>
    <h1 className="highlighted-announcements__heading">Wyróżnione ogłoszenia</h1>
        <section className="highlighted-announcements__section"> 
            <div className="highlighted-announcement">
               <img className="highlighted-announcement__img" src={audi} alt=""></img>
               <p className="highlighted-announcement__description">
                  Audi A4 
               </p>
               <p className="highlighted-announcement__specifics">2017 200 000km 143KM 1998cm3</p>
               <span className="highlighted-announcement__price">95 000PLN</span>
            </div>
            <div className="highlighted-announcement">
               <img className="highlighted-announcement__img" src={volvo} alt=""></img>
               <p className="highlighted-announcement__description">
                  Volvo S40 2.0 Diesel
               </p>
               <p className="highlighted-announcement__specifics">2006 200 000km 136KM 1998cm3</p>
               <span className="highlighted-announcement__price">15 000zl</span>
            </div>
            <div className="highlighted-announcement">
               <img className="highlighted-announcement__img" src={ford} alt=""></img>
               <p className="highlighted-announcement__description">
                  Ford Focus 
               </p>
               <p className="highlighted-announcement__specifics">2018 100 000km 125KM 1596cm3</p>
               <span className="highlighted-announcement__price">80 000zl</span>
            </div>
            <div className="highlighted-announcement">
               <img className="highlighted-announcement__img" src={bmw} alt=""></img>
               <p className="highlighted-announcement__description">
                  BMW Seria 3
               </p>
               <p className="highlighted-announcement__specifics">2020 120 000km 180KM 1998cm3</p>
               <span className="highlighted-announcement__price">150 000zl</span>
            </div>
        </section>
    </>
  )
}

export default HighlightedAnnouncments