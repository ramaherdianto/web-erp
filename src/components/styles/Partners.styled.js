import styled from "styled-components";

const PartnersSection = styled.div`
  margin-top: 56px;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  .inner-partners {
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 35px;

    .partner-item {
      display: flex;
      justify-content: center;
      align-items: center;

      .partnerImg {
        width: 100px;
      }
    }
  }
`;
const PartnersSectionMobile = styled.div`
  padding: 76px 0;
  display: none;

  .inner-partners {
    padding: 0;
    margin: 0;
    .swiper {
      padding: 30px 0;
      display: flex;
      justify-content: flex-start;
      .swiper-wrapper {
        display: flex;
        justify-content: flex-start;
        padding-left: 85px;

        .partner-item {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          .partnerImg {
            width: 180px;
          }
        }
      }
    }
  }
`;

export { PartnersSection, PartnersSectionMobile };
