import React, { useState } from "react";
import styles from "./videoPortfolio.module.css";
import Image from "next/image";
import click from "../../../public/click.svg";
import play from "../../../public/play.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import Modal from "react-modal";

const PlayButton = styled(motion.button)`
  /* Agrega tus estilos personalizados aquí */
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function VideoPortfolio(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setModalIsOpen(false);
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.1,
        yoyo: Infinity,
      },
    },
  };
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
    <div className={styles.generalContainer}>
      <div className={styles.clickContainer}>
        <Image src={click} className={styles.click}></Image>
      </div>
      <div className={styles.playContainer}>
        <div className={styles.iconContainer}>
          <PlayButton
            whileHover="hover"
            variants={buttonVariants}
            onClick={openModal}
          >
            <Image src={play} className={styles.play}></Image>
          </PlayButton>
          <h1 className={styles.videoReel}>Video Reel!</h1>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Mi Modal"
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
        >
          <iframe
            src="https://player.vimeo.com/video/429032350?autoplay=1"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </Modal>
      </div>
    </div>
  );
}

export default VideoPortfolio;
