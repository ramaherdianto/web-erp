import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Ajinomoto from "../assets/partners/Ajinomoto 1.png";
import Bni from "../assets/partners/BNI 1.png";
import Bridgestone from "../assets/partners/Bridgestone 1.png";
import Hangry from "../assets/partners/Hangry-Logo-1-2 1.png";
import Ikea from "../assets/partners/IKEA 1.png";
import Itb from "../assets/partners/ITB 1.png";
import Lemonilo from "../assets/partners/Lemonilo-1 1.png";
import Liputan6 from "../assets/partners/Liputan-6 1.png";
import Ayana from "../assets/partners/logo-ayana 1.png";
import Oppo from "../assets/partners/OPPO 1.png";
import Shopee from "../assets/partners/Shopee-Warehouse 1.png";
import Telkom from "../assets/partners/Telkom 1.png";
import { PartnersSection, PartnersSectionMobile } from "./styles/Partners.styled";

const Partners = () => {
  const Partners = [
    { img: Ayana, alt: "Ayana" },
    { img: Shopee, alt: "Shopee" },
    { img: Bridgestone, alt: "Bridgestone" },
    { img: Bni, alt: "BNI" },
    { img: Telkom, alt: "Telkom" },
    { img: Hangry, alt: "Hangry" },
    { img: Ikea, alt: "IKEA" },
    { img: Itb, alt: "ITB" },
    { img: Lemonilo, alt: "Lemonilo" },
    { img: Ajinomoto, alt: "Ajinomoto" },
    { img: Liputan6, alt: "Liputan 6" },
    { img: Oppo, alt: "Oppo" },
  ];

  return (
    <>
      <PartnersSection className="partnersWrapper container" id="Partners">
        <div className="row inner-partners">
          {Partners.map((partner, index) => {
            return (
              <div key={index} className="col-sm-4 col-md-4 col-lg-2 partner-item">
                <img src={partner.img} className="partnerImg" alt={partner.alt} />
              </div>
            );
          })}
        </div>
      </PartnersSection>
      <PartnersSectionMobile className="partnersWrapperMobile container" id="PartnersMobile">
        <div className="row inner-partners container-sm">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 150,
              },
              200: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              250: {
                slidesPerView: 1,
                spaceBetween: 80,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 100,
                loop: false,
              },
              350: {
                slidesPerView: 2,
                spaceBetween: 220,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 150,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 130,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 130,
              },
              575: {
                slidesPerView: 2,
                spaceBetween: 130,
              },
            }}
            navigation={false}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Partners.map((partner, index) => {
              return (
                <SwiperSlide key={index} className="partner-item">
                  <img src={partner.img} className="partnerImg" alt={partner.alt} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </PartnersSectionMobile>
    </>
  );
};

export default Partners;
