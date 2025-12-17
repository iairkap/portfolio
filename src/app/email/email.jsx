import React, { memo, useCallback } from "react";
import styles from "./email.module.css";
import email from "../../../public/email.svg";
import Image from "next/image";

const Email = memo(function Email(props) {
  const handleClick = useCallback(() => {
    const message = encodeURIComponent("Hola, me gustaría trabajar con vos!");
    const email = "iairkap@gmail.com";
    window.open(`mailto:${email}?subject=Contacto&body=${message}`);
  }, []);

  return (
    <div className={styles.generalContainer} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <Image src={email} width={145} height={145} alt="" />
      </div>
    </div>
  );
});

export default Email;
