import React from "react";
import tool1 from "@/public/images/tools/tool-1.png";
import tool2 from "@/public/images/tools/tool-2.png";
import tool3 from "@/public/images/tools/tool-3.png";
import tool4 from "@/public/images/tools/tool-4.png";
import tool5 from "@/public/images/tools/tool-5.png";
import tool6 from "@/public/images/tools/tool-6.png";
import tool7 from "@/public/images/tools/tool-7.png";
import tool8 from "@/public/images/tools/tool-8.png";
import Image from "next/image";
import Link from "next/link";
const SearchTool = () => {
  return (
    <section className="search-tool pt-120 pb-120" style={{direction:"rtl"}}>
      <div className="container">
        <div data-aos="zoom-in" className="row g-3 mb-60">
          <div className="col-md-6">
            <h2 className="display-4 fw-semibold">קטגוריות</h2>
          </div>
        
        </div>
        <div className="row g-3">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/best-brokers-one" data-aos="zoom-in" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool1} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">פלטפורמות מסחר בישראל</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל פלטפורמות המסחר הישראליות במקום אחד</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/compare-brokers" data-aos="zoom-in" data-aos-delay="100" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool2} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">פלטפורמות מסחר בחו"ל</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל פלטפורמות המסחר הבינלאומיות במקום אחד.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/broker-review/oanda" data-aos="zoom-in" data-aos-delay="200" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool3} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">מסחר קריפטו</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל הפלטפורמות והכלים למסחר בקריפטו במקום אחד.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/scam-broker-shield" data-aos="zoom-in" data-aos-delay="300" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool4} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">ניתוח טכני וכלים למסחר</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל כלי הניתוח הטכני והמסחר במקום אחד.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/find-my-broker" data-aos="zoom-in" data-aos-delay="400" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool5} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">קורסים למסחר והשקעות</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל הקורסים למסחר והשקעות במקום אחד.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/my-first-stock-trade-guide" data-aos="zoom-in" data-aos-delay="500" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool6} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">מסחר אוטומטי (אלגו-טריידינג)</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל הפלטפורמות והכלים למסחר אוטומטי במקום אחד.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/asset-compass" data-aos="zoom-in" data-aos-delay="600" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool7} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">כלים לניהול סיכונים</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל הכלים לניהול סיכונים במסחר במקום אחד.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/fx-fee-calculator" data-aos="zoom-in" data-aos-delay="700" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool8} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">בינה מלאכותית</h5>
                <p className="text-n500 s-text max-two-line">כאן תמצאו את כל הכלים והשירותים המשתמשים בבינה מלאכותית למסחר.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTool;
