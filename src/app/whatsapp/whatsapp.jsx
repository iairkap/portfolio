import React, { memo, useCallback } from "react";
import styles from "./whatsapp.module.css";
import whatsapp from "../../../public/whatsapp.svg";
import Image from "next/image";

const Whatsapp = memo(function Whatsapp(props) {
  const handleClick = useCallback(() => {
    const message = encodeURIComponent("Hola, me gustaría trabajar con vos!");
    const phoneNumber = "5491132067088";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  }, []);

  return (
    <div className={styles.generalContainer} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <Image src={whatsapp} width={145} height={145} alt="WhatsApp contact icon" />
      </div>
    </div>
  );
});

export default Whatsapp;
