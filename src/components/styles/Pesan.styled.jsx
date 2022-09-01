import styled from "styled-components";

const PesanSection = styled.div`
  padding: 56px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;

  .pesan-headline {
    font-weight: 600;
    color: #000;
    font-size: 32px;
  }

  .pesan-para {
    font-weight: 400;
    font-size: 18px;
    padding: 0 190px;
  }

  .btn-primary {
    &:hover {
      color: #3366ff;
    }
  }
`;

export { PesanSection };
