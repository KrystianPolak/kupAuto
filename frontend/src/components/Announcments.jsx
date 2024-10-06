import React from 'react'
import volvo from '../assets/images/S40.jpg'
import audi from '../assets/images/audiA4.jpg'
import bmw from '../assets/images/BMW3.jpg'
import ford from '../assets/images/focus_rs.jpg'


class CarAd {
    constructor(id, brand, model, price, mileage, year, engineCapacity, power, 
        fuelType, gearbox, drive, bodyType, condition, damage, image, location) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.mileage = mileage;
        this.year = year;
        this.engineCapacity = engineCapacity; 
        this.power = power;
        this.fuelType = fuelType;
        this.gearbox = gearbox;
        this.drive = drive;
        this.bodyType = bodyType;
        this.condition = condition;
        this.damage = damage;
        this.image = image;
        this.location = location;
    }
}


export let carBrands = {
    Acura: "Acura",
    AlfaRomeo: "Alfa Romeo",
    AstonMartin: "Aston Martin",
    Audi: "Audi",
    Bentley: "Bentley",
    BMW: "BMW",
    Bugatti: "Bugatti",
    Buick: "Buick",
    Cadillac: "Cadillac",
    Chevrolet: "Chevrolet",
    Chrysler: "Chrysler",
    Dodge: "Dodge",
    Ferrari: "Ferrari",
    Fiat: "Fiat",
    Ford: "Ford",
    Genesis: "Genesis",
    GMC: "GMC",
    Honda: "Honda",
    Hyundai: "Hyundai",
    Infiniti: "Infiniti",
    Jaguar: "Jaguar",
    Jeep: "Jeep",
    Kia: "Kia",
    Lamborghini: "Lamborghini",
    LandRover: "Land Rover",
    Lexus: "Lexus",
    Lincoln: "Lincoln",
    Lotus: "Lotus",
    Maserati: "Maserati",
    Mazda: "Mazda",
    McLaren: "McLaren",
    MercedesBenz: "Mercedes-Benz",
    Mini: "Mini",
    Mitsubishi: "Mitsubishi",
    Nissan: "Nissan",
    Pagani: "Pagani",
    Peugeot: "Peugeot",
    Polestar: "Polestar",
    Porsche: "Porsche",
    Ram: "Ram",
    Renault: "Renault",
    Rivian: "Rivian",
    RollsRoyce: "Rolls-Royce",
    Subaru: "Subaru",
    Tesla: "Tesla",
    Toyota: "Toyota",
    Volkswagen: "Volkswagen",
    Volvo: "Volvo"
    // Dodaj więcej marek...
};

export let fuelTypes = {
    petrol: "Benzyna",
    diesel: "Diesel",
    hybrid: "Hybryda",
    electric: "Elektryczny",
    lpg: "benzyna + lpg",
    hydrogen: "Wodór"
};

export let gearboxTypes = {
    manual: "manual",
    automatic: "automatyczna"
}

export let drives = {
    fwd: "na przednie koła",
    rwd: "na tylnie koła",
    awd: "4x4",
}

export let conditions = {
    new: "nowy",
    used: "używany"
}

export let damages = {
    accidentFree: "bezwypadkowy",
    damaged: "uszkodzony"
}

export let bodyTypes = {
    sedan: "sedan",
    hatchback: "hatchback",
    combi: "kombi",
    coupe: "coupe",
    suv: "SUV",
    minivan: "minivan"
}

export let advertisements = [
    new CarAd(1, carBrands.Audi, "A4", 95000, 230000, 2017, "1999 cm3", 143, fuelTypes.diesel, gearboxTypes.manual, drives.fwd, bodyTypes.combi, conditions.used, damages.accidentFree, audi, "Warszawa" ),
    new CarAd(2, carBrands.BMW, "Seria 3", 150000, 120000, 2020, "1999 cm3", 180, fuelTypes.petrol, gearboxTypes.automatic, drives.rwd, bodyTypes.sedan, conditions.used, damages.accidentFree, bmw, "Wrocław"),
    new CarAd(3, carBrands.Ford, "Focus", 80000, 100000, 2018, "1596 cm3", 125, fuelTypes.petrol, gearboxTypes.manual, drives.fwd, bodyTypes.hatchback, conditions.used, damages.accidentFree, ford, "Kraków"),
    new CarAd(4, carBrands.Volvo, "S40", 15000, 250000, 2006, "1997 cm3", 136, fuelTypes.diesel, gearboxTypes.manual, drives.fwd, bodyTypes.sedan, conditions.used, damages.accidentFree, volvo, "Kraków")
];



const Announcments = ({ cars = [] }) => {  // Zdefiniowanie `cars` jako props z domyślną wartością []
  return (
    <>
      <section className="announcements-section">
          {cars.map(ad => (
            <a className="announcement__link" href="#" key={ad.id}>
              <div className="announcement">
                <img className="announcement__img" src={ad.image} alt={ad.model} />
                <h2 className="announcement__description">{ad.brand} {ad.model}</h2>
                <p className="announcement__specifics">{ad.engineCapacity} {ad.power}KM {ad.year}</p>
                <span className="announcement__price">{ad.price.toLocaleString()} PLN</span>
                <p className="announcement__specifics">{ad.mileage.toLocaleString()}km {ad.bodyType} {ad.gearbox} {ad.fuelType}</p>
                <span className="announcement__location">{ad.location}</span>
              </div>
            </a>
          ))}
      </section>
    </>
  );
};

export default Announcments