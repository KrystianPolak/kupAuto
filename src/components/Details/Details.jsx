import React from 'react'
import './details.css'

const Details = () => {
  return (
    <>
    <div className='details'>
        <h1 className='details-heading'>Szczegóły ogłoszenia</h1>
        <dl className="details-list">
            <div className="details-list__item">
                <dt>Marka:</dt>
                <dd>Mercedes-Benz</dd>
            </div>

            <div className="details-list__item">
                <dt>Model:</dt>
                <dd>Klasa C</dd>
            </div>

            <div className="details-list__item">
                <dt>Cena:</dt>
                <dd>150 000 PLN</dd>
            </div>

            <div className="details-list__item">
                <dt>Przebieg:</dt>
                <dd>243 000 km</dd>
            </div>

            <div className="details-list__item">
                <dt>Rok produkcji:</dt>
                <dd>2018</dd>
            </div>

            <div className="details-list__item">
                <dt>Pojemność silnika:</dt>
                <dd>2.0 L</dd>
            </div>

            <div className="details-list__item">
                <dt>Moc:</dt>
                <dd>190 KM</dd>
            </div>

            <div className="details-list__item">
                <dt>Rodzaj paliwa:</dt>
                <dd>Diesel</dd>
            </div>

            <div className="details-list__item">
                <dt>Skrzynia biegów:</dt>
                <dd>Automatyczna</dd>
            </div>

            <div className="details-list__item">
                <dt>Napęd:</dt>
                <dd>4x4</dd>
            </div>

            <div className="details-list__item">
                <dt>Typ nadwozia:</dt>
                <dd>Kombi</dd>
            </div>

            <div className="details-list__item">
                <dt>Stan:</dt>
                <dd>Używany</dd>
            </div>

            <div className="details-list__item">
                <dt>Bezwypadkowy:</dt>
                <dd>Tak</dd>
            </div>

            <div className="details-list__item">
                <dt>Lokalizacja:</dt>
                <dd>Warszawa, Polska</dd>
            </div>
        </dl>
    </div>
    </>
  )
}

export default Details