import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './image-slider.css';

const ImageSlider = ({ imageUrls }) => {
    const [imageIndex, setImageIndex] = useState(0); // Ustawienie domyślnego indeksu na 0

    // Funkcja obsługująca zmianę na poprzednie zdjęcie
    const handlePrevImage = () => {
        setImageIndex(imageIndex === 0 ? imageUrls.length - 1 : imageIndex - 1);
    };

    // Funkcja obsługująca zmianę na następne zdjęcie
    const handleNextImage = () => {
        setImageIndex(imageIndex === imageUrls.length - 1 ? 0 : imageIndex + 1);
    };

    return (
        <div className='image-slider'>
            <img className='image-slider__img' src={imageUrls[imageIndex]} alt="slider" />
            <button className='image-slider__btn' style={{left: 0}} onClick={handlePrevImage}>
                <ArrowBackIosIcon style={{fontSize: '3rem'}} />
            </button>
            <button className='image-slider__btn' style={{right: 0}} onClick={handleNextImage}>
                <ArrowForwardIosIcon style={{fontSize: '3rem'}} />
            </button>
        </div>
    );
};

export default ImageSlider;
