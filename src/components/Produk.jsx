import React from "react";
import ProdukTalenta from "../assets/produk/produk-1.png";
import ProdukKlikPajak from "../assets/produk/produk-2.png";
import ProdukQontak from "../assets/produk/produk-3.png";
import ProdukJurnal from "../assets/produk/produk-4.png";
import ProdukFlex from "../assets/produk/produk-5.png";
import ProdukSign from "../assets/produk/produk-6.png";
import { ProdukSection } from "./styles/Produk.styled";

const products = [
  {
    img: ProdukTalenta,
    title: "Mekari Talenta",
    text: "Software Payroll dan Hris terautomasi",
  },
  {
    img: ProdukKlikPajak,
    title: "Mekari KlikPajak",
    text: "Software Pengolahan pajak online",
  },
  {
    img: ProdukQontak,
    title: "Mekari Qontak",
    text: "Software Omnichannel CRM terbaik",
  },
  {
    img: ProdukJurnal,
    title: "Mekari Jurnal",
    text: "Software Akuntansi online terintergrasi",
  },
  {
    img: ProdukFlex,
    title: "Mekari Flex",
    text: "Software Personalisasi benefit karyawan",
  },
  {
    img: ProdukSign,
    title: "Mekari e-Sign",
    text: "Software e-Signature dan e-Materai resmi",
  },
];

const Produk = () => {
  return (
    <>
      <ProdukSection className="ProdukWrapper container" id="produk">
        <h5 className="text-center">Produk</h5>
        <h1 className="text-center">Produk Terbaik Kami</h1>
        <p className="text-center produk-para">Software ERP Mekari yang tepat untuk bisnis anda</p>

        <div className="row inner-produk">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-6 col-sm-6 col-md-6 col-lg-4 produk-item">
                <div className="card card-produk border-0">
                  <img src={product.img} className="card-img-top ms-3 produkImg" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mx-3">{product.title}</h5>
                    <p className="card-text mx-3">{product.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ProdukSection>
    </>
  );
};

export default Produk;
