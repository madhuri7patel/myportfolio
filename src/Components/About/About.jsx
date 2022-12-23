import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Aspiring Full-Stack Developer, Skilled in both front-end and back-end
          web development. I enjoy creating things that live on the internet.
          Keen to create new and innovative websites by showcasing my skills. I
          have an interest in Information technology and software development.
          Always eager to learn new technologies to enhance my skills.
          <br />
          <br />
          Fast Forwarding to today, I have built several web applications and 3
          major projects. Learned a great deal about teamwork, leadership, and
          communication. After months of rigorous training, here I am
          <span style={{ color: `#00a0a0` }}>
            {" "}
            looking for challenging opportunities as a full-stack web developer.
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
