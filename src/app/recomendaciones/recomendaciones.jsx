import React, { useState } from "react";
import styles from "./recomendaciones.module.css";
import Modal from "react-modal";
import nextrec from "../../../public/nextrec.svg";
import Image from "next/image";

function Recomendaciones({ language }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentRecommendationIndex, setCurrentRecommendationIndex] =
    useState(0);

  const recomendaciones = [
    {
      projectName: "Talent Tech Hub",
      name: "Natalia Malvicino",
      recomendacionIngles:
        "I am so happy to recommend Iair for his exceptional leadership and dedication during our collaboration on the Tech Talent Hub project. As the leader of our Full-stack team, Iair demonstrated an unwavering commitment to the project's vision and played a pivotal role in ensuring its success. He exhibited a great combination of technical expertise and project management skills that inspired the entire team to perform at their best. He empowered each team member, recognizing their strengths, and encouraging them to contribute their best ideas. It was evident that he valued each team member's input and made sure their voices were heard. I genuinely believe that Iair would be an invaluable asset to any team or organization fortunate enough to have him on board. His exceptional skills, leadership, and vision make him stand out as a true professional in the field.",
      date: "July 15, 2023",
      contactInformation: "+54 9 11 6365-4880",
      recomendacionEspañol: `"Estoy muy contenta de recomendar a Iair por su liderazgo excepcional y dedicación durante nuestra colaboración en el proyecto Tech Talent Hub. Como líder de nuestro equipo Full-stack, Iair demostró un compromiso inquebrantable con la visión del proyecto y desempeñó un papel fundamental para asegurar su éxito. Exhibió una excelente combinación de experiencia técnica y habilidades de gestión de proyectos que inspiraron a todo el equipo a dar lo mejor de sí mismos. Potenció a cada miembro del equipo, reconociendo sus fortalezas y alentándolos a contribuir con sus mejores ideas. Era evidente que valoraba las aportaciones de cada miembro del equipo y se aseguraba de que sus voces fueran escuchadas. Sinceramente, creo que Iair sería un activo invaluable para cualquier equipo u organización que tenga la fortuna de contar con él. Sus habilidades excepcionales, liderazgo y visión lo destacan como un verdadero profesional en el campo."`,
    },
    {
      projectName: "Talent Tech Hub",
      name: "Christian Daniel Villegas Umaña",
      recomendacionEspañol:
        "Tuve el privilegio de ser compañero de Iair en el proyecto final de Henry 'Tech Talent Hub'. Destacó su tenacidad y su inquebrantable espíritu de lucha que nunca se doblegó ante las dificultades que presentaba el proyecto. Siempre con cabeza fría y sus manos en el teclado, salió adelante. Lo recomiendo para cualquier proyecto de IT sin duda alguna.",
      date: "July 17, 2023",
      contactInformation: "+57 317 7760098",
      recomendacionIngles:
        "I had the privilege of being Iair's teammate in Henry's 'Tech Talent Hub' final project. His tenacity and unwavering fighting spirit stood out, never faltering in the face of the challenges presented by the project. Always with a cool head and hands on the keyboard, he pushed through and succeeded. I highly recommend him for any IT project without a doubt.",
    },
    {
      projectName: "Talent Tech Hub",
      name: "Iván Scarsella",
      recomendacionIngles:
        "I was lucky enough to have been able to work with Iair on the final project for Henry. He led the team, organizing us, always helping us solve what we needed and motivating us not to give up. He is always willing to learn a new tool. Without him, the project could not have come to fruition. I am sure that he will lead any work team with passion.",
      date: "July 17, 2023",
      contactInformation: "+54 9 2213 06-4576",
      recomendacionEspañol:
        "Tuve la suerte de haber podido trabajar con Iair en el proyecto final para Henry. Él lideró al equipo, organizándonos, siempre ayudándonos a resolver lo que necesitábamos y motivándonos para no rendirnos. Siempre está dispuesto a aprender una nueva herramienta. Sin él, el proyecto no habría podido llevarse a cabo. Estoy seguro de que liderará cualquier equipo de trabajo con pasión.",
    },
    {
      projectName: "Real Cover",
      name: "Fabian Feldman",
      recomendacionIngles:
        "I had the pleasure of hiring Iair to develop our wholesale notebook e-commerce website, Real Cover. I must say that Iair surpassed all our expectations with his exceptional skills and dedication. From the initial discussions to the final implementation, Iair demonstrated his expertise in web development, creating a seamless and user-friendly platform for our customers. He paid great attention to detail, ensuring that every aspect of the website was tailored to our specific needs. Additionally, his communication and project management skills were outstanding. He kept us informed throughout the entire process, promptly addressing any concerns or modifications we had. Thanks to Iair's hard work and technical prowess, our website has become a reliable and efficient platform for our wholesale business. I highly recommend Iair to anyone in need of a talented web developer who can deliver exceptional results.",
      date: "July 20, 2023",
      contactInformation: "+5491154231080",
      recomendacionEspañol: `"Tuve el placer de contratar a Iair para desarrollar nuestro sitio web de comercio electrónico de fundas para notebook al por mayor, Real Cover. Debo decir que Iair superó todas nuestras expectativas con sus habilidades excepcionales y dedicación. Desde las discusiones iniciales hasta la implementación final, Iair demostró su experiencia en el desarrollo web, creando una plataforma fluida y fácil de usar para nuestros clientes. Prestó gran atención al detalle, asegurándose de que cada aspecto del sitio web se adaptara a nuestras necesidades específicas. Además, sus habilidades de comunicación y gestión de proyectos fueron sobresalientes. Nos mantuvo informados durante todo el proceso, abordando rápidamente cualquier inquietud o modificación que tuviéramos. Gracias al arduo trabajo y destreza técnica de Iair, nuestro sitio web se ha convertido en una plataforma confiable y eficiente para nuestro negocio mayorista. Recomiendo altamente a Iair a cualquier persona que necesite un talentoso desarrollador web que pueda brindar resultados excepcionales."`,
    },
    {
      projectName: "Soy Henry!",
      name: "Yael Romero",
      recomendacionEspañol:
        "¡Eres asombroso! Tu determinación para superar las dificultades y llevar tus habilidades técnicas a otro nivel es inspirador. Siempre estás dispuesto a ayudar y aprender, rompiendo las barreras del conocimiento en cada desafío. Es un privilegio trabajar contigo y ver cómo triunfas. ¡Sigue así, brillante y valiente!",
      date: "July 15, 2023",
      contactInformation: "+52 1 56 1091 5416",
      recomendacionIngles:
        "You are amazing! Your determination to overcome challenges and take your technical skills to another level is inspiring. You are always willing to help and learn, breaking the barriers of knowledge with every challenge. It is a privilege to work with you and witness your triumphs. Keep shining bright and courageous!",
    },
  ];

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setModalIsOpen(false);
  };

  const handleNextRecommendation = () => {
    setCurrentRecommendationIndex((prevIndex) =>
      prevIndex === recomendaciones.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousRecommendation = () => {
    setCurrentRecommendationIndex((prevIndex) =>
      prevIndex === 0 ? recomendaciones.length - 1 : prevIndex - 1
    );
  };

  const recommendation = recomendaciones[currentRecommendationIndex];
  const {
    projectName,
    name,
    date,
    contactInformation,
    recomendacionIngles,
    recomendacionEspañol,
  } = recommendation;
  recommendation;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(5px)",
    },
    content: {
      backgroundColor: "transparent",
      border: "none",
      width: "80%",
      height: "70%",
      margin: "auto",
      overflow: "visible",
    },
  };

  return (
    <div className={styles.generalContainer} onClick={openModal}>
      <svg
        width="400"
        height="400"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_38_296)">
          <path
            d="M158.271 93.5134C180.179 54.2267 191.125 34.5834 207.5 34.5834C223.875 34.5834 234.821 54.2267 256.729 93.5134L262.401 103.681C268.626 114.851 271.739 120.436 276.58 124.12C281.422 127.803 287.474 129.169 299.578 131.901L310.576 134.391C353.113 144.022 374.365 148.829 379.431 165.101C384.48 181.355 369.99 198.318 340.992 232.227L333.487 240.994C325.256 250.625 321.124 255.45 319.273 261.398C317.423 267.364 318.046 273.796 319.291 286.644L320.432 298.35C324.807 343.603 327.003 366.22 313.757 376.267C300.512 386.33 280.592 377.149 240.786 358.819L230.463 354.081C219.155 348.859 213.5 346.266 207.5 346.266C201.5 346.266 195.845 348.859 184.519 354.081L174.231 358.819C134.408 377.149 114.488 386.313 101.26 376.284C87.9973 366.22 90.1933 343.603 94.5681 298.35L95.7094 286.661C96.9544 273.796 97.5769 267.364 95.7094 261.415C93.8765 255.45 89.7438 250.625 81.5129 241.011L74.0084 232.227C45.0102 198.335 30.5198 181.372 35.569 165.101C40.6354 148.829 61.9042 144.005 104.442 134.391L115.439 131.901C127.526 129.169 133.561 127.803 138.42 124.12C143.261 120.436 146.374 114.851 152.599 103.681L158.271 93.5134Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_38_296"
            x="0"
            y="0"
            width="415"
            height="419"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_38_296"
            />
          </filter>
        </defs>
      </svg>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mi Modal"
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div className={styles.modalContent}>
          <button onClick={closeModal} className={styles.closeM}>
            x{" "}
          </button>
          <div className={styles.textContainer}>
            <div className={styles.primerRenglon}>
              <div>
                <h6 className={styles.projectName}>{projectName}</h6>
                <h2 className={styles.name}>{name}</h2>
              </div>
              <h6 className={styles.phoneNumber}>{contactInformation}</h6>
            </div>
            <p className={styles.texto}>
              {language === "ES" ? recomendacionEspañol : recomendacionIngles}
            </p>
            <div className={styles.ending}>
              <h6 className={styles.date}>{date}</h6>
              <Image
                src={nextrec}
                onClick={handleNextRecommendation}
                className={styles.Arrow}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Recomendaciones;
