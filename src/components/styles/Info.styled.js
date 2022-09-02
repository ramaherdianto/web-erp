import styled from "styled-components";

const InfoSection = styled.div`
  position: relative;
  margin-top: 76px;
  padding: 0;
  transition: all 0.5s ease-in-out;

  .InnerInfo {
    .info-list {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -200px;
        bottom: 0;
        width: 363px;
        height: 100%;
        border-radius: 0 20px 20px 0;
        z-index: -10;
        background-color: rgba(244, 247, 251, 1);
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .info-item {
        margin-left: 30px;
        width: 243px;
        height: 129px;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 128px 51px rgba(64, 66, 69, 0.01), 0px 72px 43px rgba(64, 66, 69, 0.05), 0px 32px 32px rgba(64, 66, 69, 0.09), 0px 8px 18px rgba(64, 66, 69, 0.1), 0px 0px 0px rgba(64, 66, 69, 0.1);

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 10px;
          height: 100%;
          border-radius: 10px 0 0 10px;
          background-color: #85a9ff;
        }

        .card-body {
          text-align: center;

          .card-title {
            font-size: 46px;
            font-weight: 700;
            color: #3366ff;
          }

          .card-text {
            font-size: 18px;
            font-weight: 500;
            color: #000;
          }
        }
      }
    }

    .info-images {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .inner-info-images {
        margin-right: 100px;

        .infoImg {
          width: 820px;
          position: relative;
          z-index: -1;
          margin-right: 0;
        }

        .hiasanInfo {
          position: absolute;
          width: 140px;
          right: 65px;
          top: 150px;
          z-index: -10;
        }
      }
    }
  }
`;

export { InfoSection };
