import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer footer-three pt-120">
      <div className="container" style={{direction:"rtl"}}>
       
        <div data-aos="fade-in" className="row g-4 pb-120">
       
          <div className="col-md-6 col-xl-3">
            <h4 className="text-white mb-3 mb-lg-4 fw-semibold">קיצורי דרך</h4>
            <ul className="d-flex flex-column gap-2 text-n30">
              
              <li>
                 <Link className="menu-link" href="#">
                  תקנון ותנאי שימוש
                </Link>
        
              </li>
             
              <li>
                 <Link className="menu-link" href="#">
                  תקנון ותנאי שימוש
                </Link>
        
              </li>  
              <li>
                 <Link className="menu-link" href="#">
                  תקנון ותנאי שימוש
                </Link>
        
              </li>  
              <li>
                 <Link className="menu-link" href="#">
                  תקנון ותנאי שימוש
                </Link>
        
              </li>  
              <li>
                 <Link className="menu-link" href="#">
                  תקנון ותנאי שימוש
                </Link>
        
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-3">
            <h4 className="text-white mb-3 mb-lg-4 fw-semibold">צור קשר</h4>
            <div className="d-flex flex-column gap-3 text-n30">
            
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box">
                  <i className="ph ph-envelope-open"></i>
                </div>
                <p className="text-white m-text">info@brokr.com</p>
              </div>
              
            </div>
          </div>
     
        </div>
        <div className="row g-3 g-md-0 copyright">
          <div className="col-md-6">
            <p className="m-text text-n30">
              Copyright © 2024{" "}
              <Link href="/" className="text-secondary">
                BrokR
              </Link>
              . All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="social-links-two justify-content-md-end">
              <li>
                <a href="#">
                  <i className="ph ph-facebook-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-twitter-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-pinterest-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-twitch-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-linkedin-logo"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
