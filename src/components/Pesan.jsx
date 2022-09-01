import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { PesanSection } from "./styles/Pesan.styled";

const Pesan = () => {
  return (
    <>
      <PesanSection className="PesanWrapper container" id="pesan">
        <h1 className="text-center pesan-headline">Siap untuk maju bersama Mekari?</h1>
        <p className="text-center pesan-para">Tingkatkan efisiensi, produktivitas, dan performa bisnis dengan berbagai produk Mekari yang telah digunakan oleh puluhan ribu bisnis di Indonesia.</p>
        <ButtonPrimary>Pesan Sekarang</ButtonPrimary>
      </PesanSection>
    </>
  );
};

export default Pesan;
