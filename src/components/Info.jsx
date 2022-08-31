import React from "react";
import { InfoSection } from "./styles/Info.styled";
import infoImage from "../assets/info-image.png";
import hiasanInfo from "../assets/hiasan-info.png";

const Info = () => {
  const cardsInfo = [
    {
      title: "300K",
      text: "Pengguna di Indonesia",
    },
    {
      title: "4000",
      text: "Mitra Perusahaan",
    },
    {
      title: "45 +",
      text: "Tahun Pengalaman",
    },
  ];

  return (
    <>
      <InfoSection className="InfoWrapper container-lg" id="info">
        <div className="row InnerInfo">
          <div className="col-5 info-list gap-5">
            {cardsInfo.map((cardinfo, index) => {
              return (
                <div key={index} className="card info-item">
                  <div className="card-body">
                    <h1 className="card-title">{cardinfo.title}</h1>
                    <p className="card-text">{cardinfo.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-7 info-images d-flex justify-content-center align-items-center">
            <div className="inner-info-images">
              <img src={infoImage} className="infoImg" alt="Info" />
              <img src={hiasanInfo} className="hiasanInfo" alt="" />
            </div>
          </div>
        </div>
      </InfoSection>
    </>
  );
};

export default Info;
