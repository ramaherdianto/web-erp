import React from "react";
import { FaBars } from "react-icons/fa";
import ButtonPrimary from "./ButtonPrimary";

const NavigationBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container p-3">
          <a className="navbar-brand" href="/">
            Mekari
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutUs">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Layanan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Harga
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kontak
                </a>
              </li>
            </ul>
            <div className="btn-navbar">
              <ButtonPrimary>Hubungi Kami</ButtonPrimary>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
