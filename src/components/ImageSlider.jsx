import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdjustIcon from '@mui/icons-material/Adjust';
import CircleIcon from '@mui/icons-material/Circle';import './image-slider.css';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';

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
            <div style={{width: '100%', height: '100%', overflow: 'hidden', display: 'flex'}}>
                {imageUrls.map(url => (
                    <img key={url} className='image-slider__img' src={url} alt="slider" style ={{
                        translate: `${-100 *imageIndex}%`
                    }} />
                ))}
            </div>
            
            <button className='image-slider__btn' style={{left: 0}} onClick={handlePrevImage}>
                <ArrowBackIosIcon style={{fontSize: '3rem'}} />
            </button>
            <button className='image-slider__btn' style={{right: 0}} onClick={handleNextImage}>
                <ArrowForwardIosIcon style={{fontSize: '3rem'}} />
            </button>
            <div style ={{
                position: 'absolute',
                bottom: '.5rem',
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem"
            }}>
                {imageUrls.map((_, index) => (
                    <button key={index} className='image-slider__dot-btn' onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? <CircleTwoToneIcon></CircleTwoToneIcon> : <CircleIcon></CircleIcon> }
                    </button>
                ))}
            </div>
        </div>

    );
};

export default ImageSlider;
