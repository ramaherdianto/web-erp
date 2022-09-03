import React from "react";
import Testimoni1 from "../assets/testimonials/testimoni-1.png";
import hiasanGreen from "../assets/testimonials/hiasanGreen-testimonials.png";
import hiasanYellow from "../assets/testimonials/hiasanYellow-testimonials.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TestiSection } from "./styles/Testimonials.styled";

const Testimonials = () => {
  return (
    <div>
      <TestiSection className="testimonialsWrapper container" id="testimonials">
        <div className="row">
          <div className="col-lg-4 testimonials-typo">
            <h5 className="testi-header">Testimonials</h5>
            <h1 className="testi-headaline">Kata mereka tentang produk Mekari</h1>
            <p className="testi-para">Mekari telah dipercaya sebagai partner dalam pekerjaan jasa implementasi ERP bagi sekitar 3000 perusahaan </p>
            <div className="slider-buttons">
              <button className="slide-button">
                <FaChevronLeft className="slide-button__icon" />
              </button>
              <button className="slide-button">
                <FaChevronRight className="slide-button__icon" />
              </button>
            </div>
          </div>

          <div className="col-lg-8 slider">
            <div className="slide-item">
              <img src={hiasanGreen} className="hiasanTestiGreen" alt="" />
              <img src={hiasanYellow} className="hiasanTestiYellow" alt="" />
              <img src={Testimoni1} className="testimonialsImg" alt="Testimonials" />
              <div className="card card-testimonials">
                <p className="card-text">“Sangat membantu kami dalam mengerjakan pekerjaan. Kompleksitas laporan bisnis menjadi lebih simpel dan dapat membuat kami mengambil keputusan dengan cepat”</p>
                <div className="card-testimonials__footer">
                  <p className="card-profesi">CEO of Traveloka</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TestiSection>
    </div>
  );
};

export default Testimonials;
