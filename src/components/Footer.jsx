import React from 'react'

const Footer = () => {
  return (
    <>
          <footer className="footer">
         <div className="footer-container">
             <div className="footer-links">
                 <h2>Linki</h2>
                 <ul>
                     <li><a href="#">Strona główna</a></li>
                     <li><a href="#">O nas</a></li>
                     <li><a href="#">Oferta</a></li>
                     <li><a href="#">Kontakt</a></li>
                     <li><a href="#">Polityka prywatności</a></li>
                 </ul>
             </div>
             <div className="footer-contact">
                 <h2>Kontakt</h2>
                 <ul>
                     <li>Email: info@przyklad.com</li>
                     <li>Telefon: +48 123 456 789</li>
                     <li>Adres: ul. Przykładowa 123, 00-001 Miasto</li>
                 </ul>
             </div>
             <div className="footer-social">
                 <h2>Śledź nas</h2>
                 <ul>
                     <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                     <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                     <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                 </ul>
             </div>
         </div>
         <div className="footer-bottom">
             <p>&copy; 2024 Wszelkie prawa zastrzeżone.</p>
         </div>
     </footer>
    </>
  )
}

export default Footer