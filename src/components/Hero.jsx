import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { Row, Col } from "react-bootstrap";
import dotsImage from "../assets/dots-hero.png";
import heroImage from "../assets/hero.png";
import ButtonSecondary from "./ButtonSecondary";

const Hero = () => {
  return (
    <>
      <div className="heroSection container" id="hero">
        <Row className="innerHero">
          <Col lg={6} className="colHero-1">
            <img src={dotsImage} alt="" className="dotsImage" />
            <div className="heroTypography">
              <h1>
                Software <span>ERP</span>
                <br />
                Permudah bisnismu
              </h1>
              <p>ERP software dari Mekari dirancang untuk meningkatkan efisiensi operasional perusahaan melalui solusi otomasi bisnis yang aman dan terintegrasi.</p>
            </div>
            <div className="btn-hero">
              <ButtonPrimary>Hubungi Kami</ButtonPrimary>
              <ButtonSecondary>Pelajari</ButtonSecondary>
            </div>
          </Col>
          <Col lg={6} className="colHero-2">
            <img src={heroImage} alt="" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
