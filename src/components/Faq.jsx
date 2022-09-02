import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { FaqSection } from "./styles/Faq.styled";

const Faqs = [
  {
    question: "Apa pengertian dari ERP?",
    answer:
      "ERP atau Enterprise Resource Planning adalah sebuah sistem informasi yang dapat mengintegrasikan dan mengotomasi data yang dihasilkan oleh berbagai software, sehingga menghasilkan informasi yang dapat digunakan pihak manajemen untuk mengambil keputusan. Untuk lebih lengkap mengenai pengertian ERP, silahkan baca selengkapnya pada artikel ini.",
  },
  {
    question: "Manfaat menggunakan ERP?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ad unde, in saepe corrupti molestias rerum assumenda, corporis excepturi laudantium culpa ipsum quam qui ab deserunt ducimus minus nisi est. Tempore veniam hic maiores? Atque id repellat minus, delectus laudantium amet ad, sequi corrupti deserunt omnis numquam quia hic placeat aperiam dolore odio! ",
  },
  {
    question: "Kelebihan dari ERP?",
    answer:
      "Aperiam placeat pariatur debitis! Repudiandae harum totam unde modi exercitationem corporis nihil obcaecati itaque numquam esse iusto reiciendis illo adipisci autem, excepturi est perspiciatis sunt beatae ab saepe. Repellat vero odio aliquam excepturi repellendus? Voluptate laudantium perferendis error modi odit quod voluptates eligendi tempora vel dolore. Veritatis!",
  },
  {
    question: "Apasih bedanya produk ERP kami dengan yang lain?",
    answer:
      "Aperiam placeat pariatur debitis! Repudiandae harum totam unde modi exercitationem corporis nihil obcaecati itaque numquam esse iusto reiciendis illo adipisci autem, excepturi est perspiciatis sunt beatae ab saepe. Repellat vero odio aliquam excepturi repellendus? Voluptate laudantium perferendis error modi odit quod voluptates eligendi tempora vel dolore. Veritatis!",
  },
  {
    question: "Jika ingin menggunakan produk kami, hubungi kemana ya?",
    answer:
      "Aperiam placeat pariatur debitis! Repudiandae harum totam unde modi exercitationem corporis nihil obcaecati itaque numquam esse iusto reiciendis illo adipisci autem, excepturi est perspiciatis sunt beatae ab saepe. Repellat vero odio aliquam excepturi repellendus? Voluptate laudantium perferendis error modi odit quod voluptates eligendi tempora vel dolore. Veritatis!",
  },
];

const Faq = () => {
  const [isClicked, setIsCLicked] = useState(false);

  const toggle = (index) => {
    if (isClicked === index) {
      return setIsCLicked(false);
    }

    setIsCLicked(index);
  };

  return (
    <div>
      <FaqSection className="FaqWrapper container" id="faq">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-5 faq-typo">
            <h1 className="faq-headline">Mengenal apa itu software ERP?</h1>
            <p className="faq-para">
              Software ERP adalah sebuah software yang digunakan untuk merencanakan dan mengelola sumber daya perusahaan dengan harapan dapat meningkatkan produktivitas dari bisnis. Biasanya ERP berupa paket aplikasi berbasis cloud yang
              saling terintegrasi sesuai dengan kebutuhan perusahaan, seperti mengelola keuangan, karyawan, penjualan, hingga pajak.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 accordion-wrapper">
            {Faqs.map((faq, index) => {
              return (
                <div key={index} className="accordion-item" onClick={() => toggle(index)}>
                  <div className={isClicked === index ? "question-active" : "question"}>
                    <h2>{faq.question}</h2>
                    {isClicked === index ? <FaTimes className="accord-close" /> : <FaChevronDown className="accord-open" />}
                  </div>
                  <div className={isClicked === index ? "answer open" : "answer"}>
                    <hr />
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FaqSection>
    </div>
  );
};

export default Faq;
