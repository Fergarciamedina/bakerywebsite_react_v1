import React, { useState, useEffect } from 'react';
import { createRoot, unmountComponentAtNode } from 'react-dom/client';
import "./styles/css/style.css";
import "./styles/css/bootstrap.min.css"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import carouselImage1 from './assets/img/carousel-1.jpg';
import carouselImage2 from './assets/img/carousel-2.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.css';

import { useSpring, animated } from 'react-spring';
import { Link } from "react-scroll";

import { BiChevronLeft } from "react-icons/bi";


/* import $ from 'jquery';*/

import OwlCarousel from 'react-owl-carousel';
import './assets/lib/owlcarousel/assets/owl.carousel.css';
import './assets/lib/owlcarousel/assets/owl.theme.default.css';


import './assets/lib/animate/animate.css';


/*function Spinner() {
  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
}*/

function TopBar() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      className="container-fluid top-bar bg-dark text-light px-0"
      style={props}
    >
      <div className="row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a className="small text-light" href="#">
                Inicio
              </a>
            </li>
          </ol>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>Contactanos:</small>
          <div className="h-100 d-inline-flex align-items-center">
            <a
              className="btn-lg-square text-primary border-end rounded-0"
              href=""
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}




function Navbar() {
  useEffect(() => {
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
      if ($(this).scrollTop()) {
        $('.fixed-top').addClass('bg-dark').css('top', 0);
      } else {
        $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
      }
    });
  }, []); // runs only once on mount

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 fadeIn" data-wow-delay="0.1s">
      <div className="top-bar"></div>
      <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="text-primary m-0">Ami Cakes</h1>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto p-4 p-lg-0">
          <a href="index.html" className="nav-item nav-link active">Inicio</a>
          <a href="about.html" className="nav-item nav-link">Sobre Nosotros</a>
          <a href="service.html" className="nav-item nav-link">Servicios</a>
          <a href="product.html" className="nav-item nav-link">Productos</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Páginas</a>
            <div className="dropdown-menu m-0">
              <a href="testimonial.html" className="dropdown-item">Testimonios</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contacto</a>
        </div>
        <div className=" d-none d-lg-flex">
          <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
            <i className="fas fa-phone text-primary"></i>
          </div>
          <div className="ps-3">
            <small className="text-primary mb-0">Llámanos</small>
            <p className="text-light fs-5 mb-0">+012 345 6789</p>
          </div>
        </div>
      </div>
    </nav>
  );
}


const images = [carouselImage1, carouselImage2];



function Carousel() {
  const options = {
     autoplay: false,
     smartSpeed: 1500,
     loop: true,
     nav: true,
     dots: false,
     items: 1,
   };
 
   return (
     <div className="container-fluid p-0 pb-5">
       <OwlCarousel className="owl-carousel header-carousel position-relative" {...options}>
         {images.map((image, index) => (
           <div key={index} className="owl-carousel-item position-relative">
             <img src={image} alt="" className="img-fluid" />
             <div className="owl-carousel-inner">
               <div className="container">
                 <div className="row justify-content-start">
                   <div className="col-lg-8">
                     <p className="text-primary text-uppercase fw-bold mb-2">
                       La mejor panadería
                     </p>
                     <h1 className="display-1 text-light mb-4 animated slideInDown">
                       Una delicia hecho dulce
                     </h1>
                     <p className="text-light fs-5 mb-4 pb-3" style={{ textAlign: "left" }}>
                       Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.
                     </p>
                     <a href="" className="btn btn-primary rounded-pill py-3 px-5">
                       Leer más
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </OwlCarousel>
     </div>
   );
 }
 









function Footer() {
  return (
    <footer>
      <p>Derechos reservados © 2023 - Mi Página Web</p>
    </footer>
  );
}


function BackToTopButton() {
  return (
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}



function App() {
  return (

    <div>
      {/* <Spinner /> */}
      <TopBar />
      <Navbar />
      <Carousel />
      <BackToTopButton />
    </div>

  );
}

createRoot(document.getElementById('root')).render(<App />);
