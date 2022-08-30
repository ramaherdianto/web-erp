import styled from "styled-components";

const LayananSection = styled.div`
  padding: 79px 0;
  position: relative;

  .hiasanLayananYellow {
    width: 100px;
    position: absolute;
    top: 260px;
    left: -50px;
  }

  .hiasanLayananBlue {
    width: 100px;
    position: absolute;
    bottom: 60px;
    right: -20px;
  }

  h5 {
    color: #3366ff;
    font-weight: 600;
  }

  h1 {
    font-weight: 600;
    line-height: 60px;
    padding: 0 100px;
  }

  .innerSwiper {
    .swiper {
      padding: 40px 0;
      margin-top: 40px;
      position: relative;

      .swiper-wrapper {
        display: flex;

        .layananItem {
          position: relative;
          &:nth-child(1) {
            .card {
              &::after {
                content: "";
                position: absolute;
                top: 0;
                width: 100%;
                height: 5px;
                background: #3366ff;
              }
            }
          }
          &:nth-child(2) {
            .card {
              &::after {
                content: "";
                position: absolute;
                top: 0;
                width: 100%;
                height: 5px;
                background: #94ccfd;
              }
            }
          }
          &:nth-child(3) {
            .card {
              &::after {
                content: "";
                position: absolute;
                top: 0;
                width: 100%;
                height: 5px;
                background: #7aec8d;
              }
            }
          }
          &:nth-child(4) {
            .card {
              &::after {
                content: "";
                position: absolute;
                top: 0;
                width: 100%;
                height: 5px;
                background: #fec7a9;
              }
            }
          }

          .card {
            width: 275px;
            height: 275px;

            box-shadow: 0px 40px 16px rgba(0, 0, 0, 0.01), 0px 22px 13px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 5px 5px;

            .card-img-top {
              width: 60px;
              margin-top: 35px;
            }

            .card-title {
              font-size: 18px;
              color: #000;
              font-weight: 600;
              margin-top: 20px;
            }

            .card-text {
              color: #000;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
`;

export { LayananSection };
