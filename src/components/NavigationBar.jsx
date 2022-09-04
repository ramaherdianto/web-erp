import React from "react";
import { FaBars } from "react-icons/fa";
import { ButtonNavbarSection, NavBar, NavLinkCustom } from "./styles/NavigationBar.styled";
import ButtonPrimary from "./ButtonPrimary";

const NavigationBar = () => {
  return (
    <>
      <NavBar className="navbar navbar-dark navbar-expand-lg">
        <div className="container p-3">
          <a className="navbar-brand" href="/index">
            Mekari
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li className="nav-item">
                <NavLinkCustom className="nav-link active" aria-current="page" href="#">
                  Beranda
                </NavLinkCustom>
              </li>
              <li className="nav-item">
                <NavLinkCustom className="nav-link" href="#aboutUs">
                  Tentang Kami
                </NavLinkCustom>
              </li>
              <li className="nav-item">
                <NavLinkCustom className="nav-link" href="#layanan">
                  Layanan
                </NavLinkCustom>
              </li>
              <li className="nav-item">
                <NavLinkCustom className="nav-link" href="#produk">
                  Produk
                </NavLinkCustom>
              </li>
              <li className="nav-item">
                <NavLinkCustom className="nav-link" href="#testimonials">
                  Testimonials
                </NavLinkCustom>
              </li>
              <li className="nav-item">
                <NavLinkCustom className="nav-link" href="#faq">
                  FAQ
                </NavLinkCustom>
              </li>
            </ul>
            <ButtonNavbarSection className="btn-navbar">
              <ButtonPrimary>Hubungi Kami</ButtonPrimary>
            </ButtonNavbarSection>
          </div>
        </div>
      </NavBar>
    </>
  );
};

export default NavigationBar;
