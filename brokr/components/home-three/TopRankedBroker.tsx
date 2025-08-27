import Image from "next/image";
import Link from "next/link";
import { brokers } from "../home-two/HighestRatedBroker";
import { formatString } from "@/app/(common)/broker-review/[title]/page";
const TopRankedBroker = () => {
  return (
    <section className="high-rated-brokers pt-120 pb-120">
      <div className="container">
        <div data-aos="zoom-in" className="row mb-60" style={{direction:"rtl"}}> 
          <div className="col-md-6">
            <h2 className="display-4 fw-semibold">פופולארי</h2>
          </div>
      
        </div>

        <div className="row g-3 g-xxl-4">
          {brokers.map(({ image, rating, title, users, aosDelay }) => (
            <div key={title} style={{direction:"rtl"}}  className="col-lg-6">
              <div data-aos="fade-in" data-aos-delay={aosDelay} className="broker-box">
                <div className="inner">
                  <div className="d-flex align-items-center gap-3 bb-n40">
                    <div className="img f-center">
                      <Image width="72" height="72" style={{objectFit:"contain"}} src={image} alt="" />
                    </div>
                    <div>
                      <h4 className="fw-semibold mb-3">{title}</h4>
                  
                    </div>
                  </div>
             
                  <div className="bb-n40 row">
                    <div className="pe-3 col-sm-6 br-n30">
                      <table className="w-100">
                        <tbody>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium whitespace-nowrap">
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
                        </tbody>
                      </table>
                    </div>
                    <div className="col-sm-6">
                      <table className="px-3">
                        <tbody>
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
                              <p className="m-text fw-medium whitespace-nowrap">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-4 align-items-center">
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                  <i className="ph ph-arrow-left"></i>    בקר באתר 
                    </a>
                    <Link href={`/broker-review/${formatString(title)}`} className="text-primary fw-semibold f-center gap-2">
                    <i className="ph ph-arrow-left"></i>  לעוד מידע 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRankedBroker;
