import React from 'react'
import { Link } from 'react-router-dom';

const SimplifiedSearch = () => {
  return (
    <>
    <section className="simplified-search__section">
         <h1 className="simplified-search__section__heading">Znajdź swój wymarzony samochód</h1>
           <form className="simplified-search" action="">
            
             <select className="simplified-search__select"  name="car-brands" id="">
                <option value="">marka</option>
             </select> 
             
             <select className="simplified-search__select" name="car-models" id="">
                <option value="">model</option>
             </select>

             
             <select className="simplified-search__select" name="price-up-to" id="">
                <option value="">cena do</option>
             </select>
             
             <select className="simplified-search__select"  name="car-mileage" id="">
                <option value="">przebieg</option>
             </select>
             
             <select className="simplified-search__select" name="car-body-type" id="">
                <option value="">typ nadwozia</option>
             </select>
             
             <select className="simplified-search__select" name="location" id="">
                <option value="">lokalizacja</option>
             </select>

             <Link className="search-advanced__link" to="/core">Wyszukiwanie zaawansowane</Link>
             <button className="simplified-search__button">Szukaj</button>
           </form> 
        </section>
        </>
  )
}

export default SimplifiedSearch
