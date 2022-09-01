import styled from "styled-components";

const AboutUsWrapper = styled.div`
  padding: 76px 15px;

  h5 {
    color: #3366ff;
    font-weight: 600;
    font-size: 18px;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  .innerAboutUs {
    margin-top: 100px;
    display: flex;
    row-gap: 50px;

    .aboutImage {
      img {
        width: 500px;
        position: relative;
      }
    }

    .aboutUsTypo {
      p {
        color: #464646;
        font-size: 18px;
      }

      .para-mobile {
        display: none;

        .btnReadmore {
          text-decoration: none;
          color: #3366ff;
          font-weight: 600;
          margin-left: 5px;
        }
      }

      .btnAbout {
        .btn-primary {
          &:hover {
            color: #3366ff;
          }
        }

        .btn-outline-primary {
          font-weight: 600;
          color: #000;

          &:hover {
            color: #3366ff;
          }
        }
      }
    }
  }
`;

export { AboutUsWrapper };
