import styled from "styled-components";

const ProdukSection = styled.div`
  padding: 76px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    color: #3366ff;
    font-weight: 600;
    font-size: 18px;
  }

  h1 {
    font-weight: 600;
    font-size: 32px;
  }

  p.produk-para {
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }

  .inner-produk {
    padding: 40px 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .produk-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 34px 0;
      flex-wrap: wrap;

      .card-produk {
        padding: 32px 0;
        width: 221px;
        height: 276px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 40px;
        border-radius: 6px;
        transition: all 0.4s ease-in-out;

        &:hover {
          box-shadow: 0px 55px 22px rgba(0, 0, 0, 0.01), 0px 31px 18px rgba(0, 0, 0, 0.03), 0px 14px 14px rgba(0, 0, 0, 0.05), 0px 3px 8px rgba(0, 0, 0, 0.06), 0px 0px 0px rgba(0, 0, 0, 0.06);
        }

        .produkImg {
          width: 90px;
          margin-left: 0 !important;
        }

        .card-body {
          padding: 0 !important;
          .card-title {
            font-weight: 700;
            font-size: 16px;
            color: #000;
          }

          .card-text {
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export { ProdukSection };
