import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import layananSolusi from "../assets/layanan/layanan-solusi.png";
import layananKeamanan from "../assets/layanan/layanan-keamanan.png";
import layananCloud from "../assets/layanan/layanan-cloud.png";
import layananFleksibel from "../assets/layanan/layanan-fleksibel.png";
import hiasanLayananYellow from "../assets/layanan/hiasan-layanan-yellow.png";
import hiasanLayananBlue from "../assets/layanan/hiasan-layanan-blue.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Layanan() {
  const services = [
    {
      img: layananSolusi,
      headline: "Solusi yang saling terintegrasi",
      desc: "Maksimalkan performa bisnis melalui integrasi antar produk yang praktis.",
    },
    {
      img: layananKeamanan,
      headline: "Kemanan data terjamin",
      desc: "Prosedur keamanan bersertifikasi ISO 27001 yang setara dengan bank.",
    },
    {
      img: layananCloud,
      headline: "Tersimpan di cloud",
      desc: "Akses seluruh data penting dengan mudah, di mana saja dan kapan saja.",
    },
    {
      img: layananFleksibel,
      headline: "Fleksibel sesuai kebutuhan bisnis",
      desc: "Solusi fleksibel yang menyesuaikan kebutuhan dan budget.",
    },
  ];

  return (
    <>
      <div className="layananWrapper container" id="layanan">
        <h5 className="text-center">Layanan</h5>
        <h1 className="text-center">Optimalkan proses bisnis dengan solusi ERP lengkap dari Mekari</h1>
        <div className="innerSwiper">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1250: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            navigation={false}
            modules={[Pagination]}
            className="mySwiper"
          >
            {services.map((service, index) => {
              return (
                <SwiperSlide key={index} className="layananItem">
                  <div className="card">
                    <img src={service.img} className="card-img-top ms-3" alt="..." />
                    <h5 className="card-title mx-3">{service.headline}</h5>
                    <p className="card-text mx-3">{service.desc}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
