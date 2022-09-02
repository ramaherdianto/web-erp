import styled from "styled-components";

const FaqSection = styled.div`
  padding: 76px 0;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .row {
    .faq-typo {
      .faq-headline {
        font-weight: 600;
        font-size: 32px;
        line-height: 45px;
        color: #000;
      }

      .faq-para {
        font-weight: 400;
        font-size: 16px;
        color: #000;
      }
    }

    .accordion-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      row-gap: 10px;

      .accordion-item {
        width: 550px;
        height: auto;
        max-height: 300px;
        padding: 24px 18px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        background-color: #f4f7fb;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0, 1, 0, 1);

        .question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.5s cubic-bezier(0, 1, 0, 1);

          h2 {
            font-weight: 400;
            font-size: 16px;
          }

          .accord-open {
            font-size: 22px;
            color: #4c9bf8;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          .accord-close {
            font-size: 22px;
            color: #4c9bf8;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1);
          }
        }

        .question-active {
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.5s cubic-bezier(0, 1, 0, 1);

          h2 {
            font-weight: 600;
            font-size: 16px;
          }

          .accord-open {
            font-size: 22px;
            color: #4c9bf8;
          }

          .accord-close {
            font-size: 22px;
            color: #4c9bf8;
          }
        }

        .answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0, 1, 0, 1);

          &.open {
            height: auto;
            max-height: 999px;
            transition: all 0.5s cubic-bezier(0, 1, 0, 1);

            p {
              margin-top: 30px;
              font-weight: 400;
              font-size: 14px;
              color: #000;
            }
          }

          p {
            font-weight: 400;
            font-size: 14px;
            color: #000;
          }
        }
      }
    }
  }
`;

export { FaqSection };
