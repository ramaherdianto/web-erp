import React from "react";
import infoImage from "../assets/info-image.png";
import hiasanInfo from "../assets/hiasan-info.png";

const Info = () => {
  return (
    <div className="InfoWrapper container-lg" id="info">
      <div className="row InnerInfo">
        <div className="col-5 info-list gap-5">
          <div className="card info-item">
            <div className="card-body">
              <h1 className="card-title">300K</h1>
              <p className="card-text">pengguna di Indonesia</p>
            </div>
          </div>
          <div className="card info-item">
            <div className="card-body">
              <h1 className="card-title">4000</h1>
              <p className="card-text">Mitra Perusahaan</p>
            </div>
          </div>
          <div className="card info-item">
            <div className="card-body">
              <h1 className="card-title">45 +</h1>
              <p className="card-text">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
        <div className="col-7 info-images d-flex justify-content-center align-items-center">
          <div className="inner-info-images">
            <img src={infoImage} className="infoImg" alt="Info" />
            <img src={hiasanInfo} className="hiasanInfo" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
