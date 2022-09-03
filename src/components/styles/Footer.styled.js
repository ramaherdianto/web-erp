import styled from "styled-components";

const FooterSection = styled.div`
  width: 100%;
  padding: 100px 0;
  background-color: #172b5e;
  transition: all 0.5s ease-in-out;

  .container {
    .footerList {
      .footer-logo {
        display: flex;
        flex-direction: column;

        a {
          text-decoration: none;
          h2 {
            font-weight: 700;
            font-size: 24px;
            color: #fff;
          }
        }
      }

      .footerItemWrapper {
        .footerList-item {
          .footer-item {
            h2 {
              font-weight: 700;
              font-size: 24px;
              color: #fff;
              margin-bottom: 20px;
            }

            p {
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              color: rgba(255, 255, 255, 0.8);
            }
          }
        }
      }
    }
  }
`;

export { FooterSection };
