import React from "react";
import { useState } from "react";
import AboutImage from "../assets/about-image.png";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = "Suspendisse lobortis faucibus nisi, eu tempus nunc tincidunt id. Sed convallis tortor lobortis ex consectetur placerat. Vivamus non pretium dui. Aenean sed dui imperdiet, egestas purus a, imperdiet sem.";

  const linkName = readMore ? "Read Less" : "Read More...";

  return (
    <>
      <div className="aboutUsWrapper container d-flex flex-column justify-content-center" id="aboutUs">
        <h5 className="text-center">Tentang Kami</h5>
        <h1 className="text-center">Mekari Company</h1>
        <div className="row innerAboutUs d-flex justify-content-between align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-sm-center justify-content-md-center justify-content-lg-start aboutImage">
            <img src={AboutImage} alt="About Us" />
          </div>
          <div className="col-lg-6 aboutUsTypo">
            <p className="para-desktop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mi ac nisl iaculis efficitur. Vestibulum imperdiet pharetra mauris, non suscipit ante fermentum quis. Curabitur viverra lobortis urna, vel facilisis risus
              tincidunt ut. Curabitur eleifend venenatis sem, vel finibus mi rutrum vitae.
              <br />
              <br />
              Suspendisse lobortis faucibus nisi, eu tempus nunc tincidunt id. Sed convallis tortor lobortis ex consectetur placerat. Vivamus non pretium dui. Aenean sed dui imperdiet, egestas purus a, imperdiet sem.
            </p>
            <p className="para-mobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mi ac nisl iaculis efficitur. Vestibulum imperdiet pharetra mauris, non suscipit ante fermentum quis. Curabitur viverra lobortis urna, vel facilisis risus
              tincidunt ut. Curabitur eleifend venenatis sem, vel finibus mi rutrum vitae. {readMore && extraContent}
              <a
                className="btnReadmore"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {linkName}
              </a>
            </p>

            <div className="btnAbout d-flex justify-content-sm-center justify-content-md-center justify-content-lg-start">
              <ButtonPrimary>Tentang Kami</ButtonPrimary>
              <ButtonSecondary>Cerita Kami</ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
