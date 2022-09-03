import styled from "styled-components";

const TestiSection = styled.div`
  padding: 76px 0;
  transition: all 0.5s ease-in-out;
  margin-bottom: 50px;

  .row {
    .testimonials-typo {
      h5 {
        color: #3366ff;
        font-weight: 600;
        font-size: 18px;
      }

      h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 50px;
        position: relative;

        &::after {
          content: "";
          width: 95px;
          height: 5px;
          top: 110px;
          left: 5px;
          position: absolute;
          border-radius: 20px;
          background: #254eda;
        }
      }

      p {
        text-align: justify;
        padding-right: 20px;
        margin-top: 63px;
        font-weight: 400;
        font-size: 16px;
        color: #000;
        position: relative;

        &::after {
          content: "";
          width: 95px;
          height: 5px;
          top: -35px;
          left: 95px;
          position: absolute;
          border-radius: 20px;
          background: #254eda;
        }
      }

      .slider-buttons {
        display: flex;
        column-gap: 23px;
        margin-top: 41px;

        .slide-button {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #4c9bf8;
          border: none;
          border-radius: 50%;
          box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
          transition: all 0.4s ease-in-out;

          &:hover {
            background-color: #3366ff;
          }

          .slide-button__icon {
            width: 8px;
            height: 14px;
            color: #fff;
          }
        }
      }
    }

    .slider {
      position: relative;
      .slide-item {
        display: flex;
        align-items: center;
        position: relative;

        .hiasanTestiGreen {
          width: 87.39px;
          height: 70.92px;
          position: absolute;
          left: 5px;
          bottom: -10px;
          z-index: -1;
        }
        .hiasanTestiYellow {
          width: 87.39px;
          height: 70.92px;
          position: absolute;
          top: -25px;
          left: 360px;
          z-index: -1;
        }

        .testimonialsImg {
          width: 376px;
          height: 345px;
          margin-left: 50px;
          border-radius: 35px;
          position: relative;
        }

        .card-testimonials {
          position: absolute;
          left: 290px;
          top: 100px;
          padding: 19px 30px;
          width: 447px;
          height: 179px;
          background: #ffffff;
          box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.2);
          border-radius: 10px;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: -1px;
            width: 16px;
            height: 100%;
            border-radius: 10px 0px 0px 10px;
            background: #254eda;
          }

          p.card-text {
            font-weight: 400;
            font-size: 14px;
          }

          .card-testimonials__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            .card-profesi {
              font-weight: 700;
              font-size: 14px;
            }

            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export { TestiSection };
