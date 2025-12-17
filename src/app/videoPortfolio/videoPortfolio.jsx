import React, { useState, memo, useMemo } from "react";
import styles from "./videoPortfolio.module.css";
import Image from "next/image";
import click from "../../../public/click.svg";
import play from "../../../public/play.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import Modal from "react-modal";
import Link from "next/link";
import { useModal } from "../hooks/useModal";
const PlayButton = styled(motion.button)`
  /* Agrega tus estilos personalizados aquí */
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoPortfolio = memo(function VideoPortfolio(props) {
  const { isOpen: modalIsOpen, open: openModal, close: closeModal } = useModal();

  const buttonVariants = useMemo(
    () => ({
      hover: {
        scale: 1.1,
        transition: {
          duration: 0.1,
          yoyo: Infinity,
        },
      },
    }),
    []
  );
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
        <Image src={click} className={styles.click} alt="click"></Image>
      </div>
      <div className={styles.playContainer}>
        <div className={styles.iconContainer}>
          <PlayButton
            whileHover="hover"
            variants={buttonVariants}
            onClick={openModal}
            className={styles.button}
          >
            <Link href={"/audiovisual"}>
              <Image src={play} className={styles.playbu} alt="play"></Image>
            </Link>
          </PlayButton>
          <h1 className={styles.videoReel}>Portfolio Audiovisual</h1>
        </div>
      </div>
    </div>
  );
});

export default VideoPortfolio;
//
