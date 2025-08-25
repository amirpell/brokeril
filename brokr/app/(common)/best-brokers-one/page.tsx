"use client";
import Image from "next/image";
import React from "react";
import { brokers } from "@/components/home-two/HighestRatedBroker";
import Link from "next/link";
import { formatString } from "../broker-review/[title]/page";
const BestBrokerOne = () => {
  const [filter, setFilter] = React.useState(false);
  return (
    <main>
      <section className="hero-breadcrumb" style={{direction:"rtl"}}>
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">פלטפורמות מסחר ישראליות</h2>
            
            </div>
          </div>
        </div>
      </section>

      {/* <!-- best brokers --> */}
      <section className="pt-120 pb-120">
        <div className="container">
       
          <div className="row g-4">
            
            <div className="col-lg-12">
              
              <div className="row g-3 g-xxl-4 mb-40" style={{direction:"rtl"}}>
                {brokers.slice(0, 6).map(({ image, rating, title, users }) => (
                  <div key={title} data-aos="fade-in" className="col-xxl-6">
                    <div className="broker-box">
                      <div className="inner">
                        <div className="d-flex align-items-center gap-3 bb-n40">
                          <div className="img f-center">
                            <Image width="72" height="72" src={image} alt="" />
                          </div>
                          <div>
                            <h4 className="fw-semibold mb-3">{title}</h4>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                            
                             
                            </div>
                          </div>
                        </div>
                       
                        <div className="bb-n40">
                          <table className="w-100">
                            <tbody className="">
                              <tr>
                                <td className="w-75 py-1">
                                  <p className="m-text fw-medium">Fee Level:</p>
                                </td>
                                <td className="w-25 py-1">
                                  <p className="m-text fw-medium">
                                    Low <span className="text-brown">4.5</span>/5
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td className="w-75 py-1">
                                  <p className="m-text fw-medium">Inactivity Fee:</p>
                                </td>
                                <td className="w-25 py-1">
                                  <p className="m-text fw-medium">No</p>
                                </td>
                              </tr>
                              <tr>
                                <td className="w-75 py-1">
                                  <p className="m-text fw-medium">Investor Protection:</p>
                                </td>
                                <td className="w-25 py-1">
                                  <p className="m-text fw-medium">No</p>
                                </td>
                              </tr>
                              <tr>
                                <td className="w-75 py-1">
                                  <p className="m-text fw-medium">Mobile Platform:</p>
                                </td>
                                <td className="w-25 py-1">
                                  <p className="m-text fw-medium">
                                    Yes <span className="text-brown">4.7</span>/5
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                          בקר באתר <i className="ph ph-arrow-right"></i>
                        </a>
                        <Link href={`/broker-review/${formatString(title)}`} className="text-primary pt-3 fw-semibold f-center gap-2">
                          פרטים <i className="ph ph-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BestBrokerOne;
