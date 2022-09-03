import React from "react";
import { FooterSection } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <>
      <FooterSection className="footerWrapper justify-content-center" id="footer">
        <div className="container justify-content-center">
          <div className="row footerList justify-content-between flex-wrap">
            <div className="col-sm-12 col-md-2 col-lg-2 footer-logo">
              <a href="/index">
                <h2>Mekari</h2>
              </a>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-10 footerItemWrapper">
              <div className="row footerList-item justify-content-between">
                <div className="col-sm-6 col-md-6 col-lg-3 footer-item">
                  <h2>Mengapa Mekari</h2>
                  <p>Dukungan purna jual</p>
                  <p>Klien Kami</p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 footer-item">
                  <h2>Produk</h2>
                  <p>Mekari Talenta</p>
                  <p>Mekari Jurnal</p>
                  <p>Mekari Klik Pajak</p>
                  <p>Mekari Qontak</p>
                  <p>Mekari Flex</p>
                  <p>Mekari E-Sign</p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 footer-item">
                  <h2>Solusi</h2>
                  <p>Software ERP</p>
                  <p>Integrasi</p>
                  <p>Harga</p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 footer-item">
                  <h2>Perusahaan</h2>
                  <p>Tentang Kami</p>
                  <p>Bantuan</p>
                  <p>Term of Service</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterSection>
    </>
  );
};

export default Footer;
