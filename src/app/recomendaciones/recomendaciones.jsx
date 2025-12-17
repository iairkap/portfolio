import React, { useState, memo, useMemo } from "react";
import styles from "./recomendaciones.module.css";
import Modal from "react-modal";
import nextrec from "../../../public/nextrec.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import star from "../../../public/star.svg";
import { useModal } from "../hooks/useModal";
import { useTheme } from "../hooks";

const Recomendaciones = memo(function Recomendaciones({ language }) {
  const { isOpen: modalIsOpen, open: openModal, close: closeModal } = useModal();
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0);
  const darkMode = useTheme();

  const modalContentStyles = darkMode ? styles.modalContentDark : styles.modalContentLight;

  const textStyles = darkMode ? styles.textDark : styles.textLight;

  const recomendaciones = useMemo(
    () => [
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
    ],
    []
  );

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
  const { projectName, name, date, contactInformation, recomendacionIngles, recomendacionEspañol } =
    recommendation;
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
      <Image src={star}></Image>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mi Modal"
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div className={modalContentStyles}>
          <button onClick={closeModal} className={styles.closeM}>
            x{" "}
          </button>
          <div className={textStyles}>
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
              <Image src={nextrec} onClick={handleNextRecommendation} className={styles.Arrow} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default Recomendaciones;
