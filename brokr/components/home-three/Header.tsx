"use client";
import React, { useEffect } from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import brokerCat1 from "@/public/images/broker-category/broker-category-1.png";
import brokerCat2 from "@/public/images/broker-category/broker-category-2.png";
import brokerCat3 from "@/public/images/broker-category/broker-category-3.png";
import brokerCat4 from "@/public/images/broker-category/broker-category-4.png";
import brokerCat5 from "@/public/images/broker-category/broker-category-5.png";
import brokerCat6 from "@/public/images/broker-category/broker-category-6.png";
import brokerCat7 from "@/public/images/broker-category/broker-category-7.png";
import brokerCat8 from "@/public/images/broker-category/broker-category-8.png";
import brokerCat9 from "@/public/images/broker-category/broker-category-9.png";
import brokerCat10 from "@/public/images/broker-category/broker-category-10.png";
import usa from "@/public/images/country/usa.png";
import australia from "@/public/images/country/australia.png";
import germany from "@/public/images/country/germany.png";
import uae from "@/public/images/country/uae.png";
import uk from "@/public/images/country/uk.png";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import user from "@/public/images/user/user-1.png";

const Header = () => {
  const [megaMenu, setMegaMenu] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [mobileSearch, setMobileSearch] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    const handleItemClick = (event: any) => {
      const submenu = event.currentTarget.querySelector(".dropdown-list");
      if (submenu) {
        const allSubmenus = document.querySelectorAll(".dropdown-item .dropdown-list");
        allSubmenus.forEach((sub) => {
          if (sub !== submenu) {
            sub.classList.remove("active");
          }
        });
        submenu.classList.toggle("active");
      }
    };

    dropdownItems.forEach((item) => {
      item.addEventListener("click", handleItemClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      dropdownItems.forEach((item) => {
        item.removeEventListener("click", handleItemClick);
      });
    };
  }, []);

  useEffect(() => {
    if (document.documentElement.scrollTop > 90) {
      setScrolled(true);
    }
    document.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header style={{direction:"rtl"}} className={`header header-two header-three border-bottom-0 ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="d-flex gap-2 gap-lg-3 gap-xxxl-4 justify-content-between">
          <Link href="/" className="d-flex align-items-center">
            <Image priority src={logo} alt="site logo" />
          </Link>
          <OutsideClickHandler onOutsideClick={() => setMegaMenu(false)}>
            <div className="brokers-dropdown">
       
              <div className={`best-brokers-mega-menu ${megaMenu ? "active" : ""}`}>
                <div className="container-fluid mx-auto">
                  <div className="row justify-content-between">
                    <div className="category col-lg-8 col-xl-9">
                      <h5 className="fw-semibold mb-4 text-capitalize">Best brokers by categories</h5>
                      <div className="row g-2 g-md-3 gx-xl-4">
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat1} alt="" />
                            <p className="m-text fw-medium">Best Stock Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat2} alt="" />
                            <p className="m-text fw-medium">Best Forex Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat3} alt="" />
                            <p className="m-text fw-medium">Best CFD Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat4} alt="" />
                            <p className="m-text fw-medium">Best Brokers for Beginners</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat5} alt="" />
                            <p className="m-text fw-medium">Best Stock Trading Apps</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat6} alt="" />
                            <p className="m-text fw-medium">Best discount brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat7} alt="" />
                            <p className="m-text fw-medium">Best Crypto Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat8} alt="" />
                            <p className="m-text fw-medium">Best Futures Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat9} alt="" />
                            <p className="m-text fw-medium">Best Brokers for bonds</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat10} alt="" />
                            <p className="m-text fw-medium">Best low spread forex brokers</p>
                          </Link>
                        </div>
                        <div className="col-12">
                          <a className="d-flex align-items-center fw-semibold text-primary gap-2" href="#">
                            BrokR Awards 2024 <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="country col-lg-4 col-xl-3">
                      <h5 className="fw-semibold mb-4 text-capitalize">country recommendation</h5>
                      <div className="country-list">
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={usa} alt="" />
                          <p>United States</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={uk} alt="" />
                          <p>United Kingdom</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={australia} alt="" />
                          <p>Autralia</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={uae} alt="" />
                          <p>United Arab Emirates</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={germany} alt="" />
                          <p>Germany</p>
                        </Link>
                      </div>
                      <div className="mt-4">
                        <a className="d-flex align-items-center fw-semibold text-primary gap-2" href="#">
                          More Countries <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
        <div className="d-flex menu-dropdown-container">
          <div className="pe-sm-3">
            <ul className={`menu ${mobileMenu ? "active" : ""}`}>
              <Link href="/" className="d-flex mb-4 d-xl-none px-2 pt-2">
                <Image priority src={logo} alt="site logo" />
              </Link>
              <button onClick={() => setMobileMenu(false)} className="close-btn bg-transparent border-0 position-absolute">
                <i className="ph ph-x"></i>
              </button>
               <li className="dropdown-item">
                <button>
                  כלים <i className="ph ph-caret-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/find-my-broker">Find My broker</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/compare-brokers">Compare brokers</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/brokerage-fee-calculator">Stock fee calculator</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/fx-fee-calculator">FX fee calculator</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/my-first-stock-trade">My First Stock Trade</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/asset-compass">Asset Compass</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/scam-broker-shield">Scam Broker Shield</Link>
                  </li>
                </ul>
              </li>
                <li className="dropdown-item">
                <button>
                  קטגוריות <i className="ph ph-caret-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/find-my-broker">פלטפורמות מסחר ישראליות</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/compare-brokers">Compare brokers</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/brokerage-fee-calculator">Stock fee calculator</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/fx-fee-calculator">FX fee calculator</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/my-first-stock-trade">My First Stock Trade</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/asset-compass">Asset Compass</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/scam-broker-shield">Scam Broker Shield</Link>
                  </li>
                </ul>
              </li>
          <li className="broker-review dropdown-item">
                <button className="broker-review-dropdown-btn">
  <Link className="menu-link blue" href="/blog">
המגזין                          </Link>                </button>
           
              </li>
              <li className="dropdown-item">
                <button>
      <Link   href="/">בית</Link>

                </button>
                
              </li>
              
             
            </ul>
            <div onClick={() => setMobileMenu(false)} className="menu-overlay d-xl-none"></div>
          </div>
          
   
         
          <button className="d-xl-none mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
            <i className="ph ph-list"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
