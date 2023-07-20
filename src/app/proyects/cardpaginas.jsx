import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./cardpaginas.module.css";
import ReactModal from "react-modal";

function Card(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className={styles.contenedor}>
      <motion.div
        className={`absolute bottom-0 overflow-hidden rounded-t-3xl transition-all duration-300 ease-in-out ${
          isHovered
            ? "w-[95%] h-[55%] left-[2.5%] transform hover:scale-90"
            : "md:h-full md:w-full md:left-0 w-[95%] h-[50%] left-[2.5%] transform hover:scale-90"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/talent-tech-hub.png?alt=media&token=b3663675-b6f8-4047-b523-bf13c04acd06"
          }
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          draggable={false}
          alt="card image"
          layout="fill"
        />
      </motion.div>
      <h1 className={styles.nombreDelProyecto}>Talent-Tech-Hub</h1>
      <h3 className={styles.textExplain}>
        During Soy Henry's bootcamp, I led a team in creating a platform to
        connect Israeli startups with skilled Latin American professionals. The
        Goal We sought to solve a global problem: Israel's growing startups
        needing skilled professionals, and Latin America's pool of qualified
        talent. Our aim was to bridge this gap, offering remote work
        opportunities for Latin American professionals, and affordable quality
        services for Israeli startups. The Team and Leadership Role I led a team
        of diverse professionals. This role honed my leadership skills,
        promoting a collaborative, efficient environment. I coordinated tasks,
        assigned responsibilities, ensured seamless communication, and
        maintained our shared vision. The Tech Stack We used several
        technologies to optimize our development and meet project expectations:
        Next.js: Chosen for its server-side rendering, SEO optimization, and
        integrated routing system. Prisma: Our ORM for database management. Its
        TypeScript type generation provided a safe, efficient development
        environment. Vercel: Ideal for deployment and hosting, it provided a
        simplified development experience with one-click deployment and
        real-time preview. Payment Gateway: Incorporated to manage monetary
        transactions between parties. Third-party Auth: Used to authenticate
        users securely and efficiently. Cloudinary: Managed all platform media
        assets, enhancing page loading. Firebase: Provided a variety of backend
        services like real-time database, storage, and notifications. Admin
        Dashboard: Designed for efficient site management and user activity
        control. Conclusion Developing this project was rewarding and
        educational. We created an efficient solution to a global problem,
        hoping to foster work connections between Latin American professionals
        and Israeli startups. This project served as a testament to our
        technical skills, teamwork, and problem-solving abilities, embodying the
        essence of Soy Henry's bootcamp: continuous learning, growth, and
        improvement
      </h3>
    </div>
  );
}

export default Card;
