import styled from "styled-components";

const HeroSection = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .innerHero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .colHero-1 {
      .dotsImage {
        position: absolute;
        height: 150px;
        left: -40px;
        top: -65px;
      }

      .heroTypography {
        position: relative;
        h1 {
          color: #fff;
          font-size: 46px;
          font-weight: 700;
          line-height: 60px;

          span {
            color: #3366ff;
          }
        }

        p {
          color: #fff;
          font-size: normal;
          font-weight: 300;
          margin-top: 20px;
        }
      }
      .btn-hero {
        margin-top: 50px;
      }
    }

    .colHero-2 {
      display: flex;
      justify-content: flex-end;

      img {
        width: 400px;
        margin-right: 0;
      }
    }
  }
`;

export { HeroSection };
