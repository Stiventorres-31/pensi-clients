import React from 'react'
import logoLight from '../assets/logo-light.png'


const Footer = () => {
  const address = "Cra 51b #2-790, Barranquilla, Colombia";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;


  return (
    <footer className="footer" id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo" >
              <img src={logoLight} alt="Homeverse logo" />
            </a>
            <p className="section-text">
              ¿Necesitas ayuda o más información? Contáctanos a través de nuestros medios y estaremos encantados de ayudarte.
            </p>
            <ul className="contact-list">
              <li>
                <a href={googleMapsUrl} className="contact-link location-dir" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="location-outline"></ion-icon>
                  <address>Barranquilla, Atlantico</address>
                </a>
              </li>
              <li>
                <a href="https://wa.link/abp000" className="contact-link" target='_blank' rel="noopener noreferrer">
                  <ion-icon name="call-outline"></ion-icon>
                  <span>(+57) 324 3399662</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@Inmueblespensi.com" className="contact-link" target='_blank' rel="noopener noreferrer">
                  <ion-icon name="mail-outline"></ion-icon>
                  <span>info@Inmueblespensi.com</span>
                </a>
              </li>
            </ul>

            <ul className="header-top-social-list">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61557942225124&mibextid=LQQJ4d" target='_blank' rel="noopener noreferrer" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/"  className="social-link" rel="noopener noreferrer">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pensicolombia?igsh=dDB3dXllZTlzaG5s" target='_blank' rel="noopener noreferrer" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@pensicolombia?_t=8lfCanCqcxa&_r=1" target='_blank' rel="noopener noreferrer" className="social-link">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Compañia</p>
              </li>
              <li>
                <a href="/#about" className="footer-link">Sobre nosotros</a>
              </li>
              <li>
                <a href="/#services" className="footer-link">Servicios</a>
              </li>
              <li>
                <a href="/#property" className="footer-link">Propiedades</a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Servicios</p>
              </li>
              <li>
                <a href="#consigue-tu-pen" className="footer-link">Conseigue tu pen</a>
              </li>
              <li>
                <a href="#publica-tu-pen" className="footer-link">Publica tu pen</a>
              </li>
              {/* <li>
                <a href="https://wa.link/abp000" target='_blank' rel="noopener noreferrer" className="footer-link">Vender una casa</a>
              </li> */}
            </ul>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Customer Care</p>
              </li>
              <li>
                <a href="#" className="footer-link">Registro & inicio de sesión</a>
              </li>
              <li>
                <a href="#" className="footer-link">Lista de deseos</a>
              </li>
              <li>
                <a href="#" className="footer-link">Terminos & condiciones</a>
              </li>
            </ul>

          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="/">Inmuebles Pensi</a>. Todos los derechos reservados.
          </p>
        </div>
      </div>

    </footer>


  )
}

export default Footer