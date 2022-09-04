import React from "react";
import hiasanGreen from "../assets/testimonials/hiasanGreen-testimonials.png";
import hiasanYellow from "../assets/testimonials/hiasanYellow-testimonials.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TestiSection } from "./styles/Testimonials.styled";
import { TestiData } from "./TestiData";
import { useState } from "react";

const Testimonials = ({ slides }) => {
  const [isActive, setIsActive] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setIsActive(isActive === length - 1 ? 0 : isActive + 1);
  };

  const prevSlide = () => {
    setIsActive(isActive === 0 ? length - 1 : isActive - 1);
  };

  return (
    <div>
      <TestiSection className="testimonialsWrapper container" id="testimonials">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 testimonials-typo">
            <h5 className="testi-header">Testimonials</h5>
            <h1 className="testi-headaline">Kata mereka tentang produk Mekari</h1>
            <p className="testi-para">Mekari telah dipercaya sebagai partner dalam pekerjaan jasa implementasi ERP bagi sekitar 3000 perusahaan </p>
            <div className="slider-buttons">
              <button className="slide-button" onClick={prevSlide}>
                <FaChevronLeft className="slide-button__icon" />
              </button>
              <button className="slide-button" onClick={nextSlide}>
                <FaChevronRight className="slide-button__icon" />
              </button>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-8 slider">
            {TestiData.map((slide, index) => {
              return (
                <div key={index} className={index === isActive ? "slide-item active" : "slide-item"}>
                  <img src={hiasanGreen} className="hiasanTestiGreen" alt="" />
                  <img src={hiasanYellow} className="hiasanTestiYellow" alt="" />
                  <img src={slide.imgTesti} className="testimonialsImg" alt="Testimonials" />
                  <div className="card card-testimonials">
                    <p className="card-text">{slide.ucapanTesti}</p>
                    <div className="card-testimonials__footer">
                      <p className="card-profesi">{slide.job}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TestiSection>
    </div>
  );
};

export default Testimonials;
