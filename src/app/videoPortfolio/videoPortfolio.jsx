import React, { useState, memo, useMemo, useEffect } from "react";
import styles from "./videoPortfolio.module.css";
import Image from "next/image";
import click from "../../../public/click.svg";
import play from "../../../public/play.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import MarqueeText from "../components/ui/MarqueeText";
import { useTouchDevice } from "../hooks";

const PlayButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoPortfolio = memo(function VideoPortfolio(props) {
  const phrases = {
    ES: "PORTAFOLIO AUDIOVISUAL • VIDEOS DE PROYECTOS • DEMOS",
    EN: "AUDIOVISUAL PORTFOLIO • PROJECT VIDEOS • DEMOS",
  };

  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = useTouchDevice();

  // Auto-alternar en touch devices cada 3 segundos
  useEffect(() => {
    if (!isTouchDevice) {
      return;
    }

    const interval = setInterval(() => {
      setIsHovered((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isTouchDevice]);

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

  const currentText =
    (props.language === "ES" ? phrases.ES : phrases.EN) +
    " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ";

  return (
    <div className={styles.generalContainer}>
      <Link href={"/audiovisual"} className={styles.link}>
        <div className={styles.clickContainer}>
          <Image src={click} className={styles.click} alt="Click to view audiovisual portfolio" />
        </div>
        <div className={styles.playContainer}>
          <div
            className={styles.iconContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isHovered && (
              <PlayButton whileHover="hover" variants={buttonVariants} className={styles.button}>
                <Image
                  src={play}
                  className={styles.playbu}
                  alt="Play audiovisual portfolio video"
                />
              </PlayButton>
            )}
          </div>
          <div className={styles.textContainer}>
            <MarqueeText
              isVisible={isHovered}
              text={currentText}
              fontSize="2rem"
              speed={60}
              customClassName={styles.alwaysWhiteText}
            />
          </div>
        </div>
      </Link>
    </div>
  );
});

export default VideoPortfolio;
//
