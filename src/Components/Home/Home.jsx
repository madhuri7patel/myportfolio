import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import Type from "./Type";

const Home = ({ scrollRef }) => {
  const [projectArray, setProjectArray] = useState(projects.slice(0, 4));
  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  console.log(offset);
  const handleShowMoreBtn = () => {
    if (projects.length === projectArray.length) {
      setProjectArray(projects.slice(0, 4));
      window.scrollTo(0, location);
    } else {
      setProjectArray(projects);
      setLocation(offset);
    }
  };

  var mybutton = document.getElementById(styles.myBtnn);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <div ref={scrollRef}>
      <SideIcons />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
            transform: `translateX(-${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
        >
          <h1>
            <span>Hi, My name is</span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Madhuri Patel
            </div>
          </h1>
          <h1>
            <Type />
          </h1>
          <div className={styles.resumes}>
            <div className={styles.btn}>
              <a
                href="https://drive.google.com/file/d/1JRIZodc7pU_nWdl6WNJa9IRGrOG6XbkU/view"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text={
                    <span className={styles.resumeBtn}>
                      <span>View Resume</span>{" "}
                      <i className="fas fa-file-download"></i>
                    </span>
                  }
                  handleButton={handleButton}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            transform: `translateX(${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
          className={styles.profileImage}
        >
          <img
            src="https://user-images.githubusercontent.com/75351991/189523111-18dcc5ac-6793-42d7-970c-728f2e528f94.png?raw=true"
            alt="Profile pic"
          />
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <About />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <div style={{ height: "15px" }}></div>
        <TechStacks />
      </div>

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <div style={{ height: "10px" }}></div>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          My Projects
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Button
          text={
            projects.length !== projectArray.length ? "Show More" : "Show Less"
          }
          handleButton={handleShowMoreBtn}
        />
        <br />
        {/* <h1
          style={{ color: `${newTheme.title}`, marginTop: "20px" }}
          className={styles.heading}
        ></h1> */}
        {/* <img
          className={styles.githubCalender}
          src="https://user-images.githubusercontent.com/75351991/192589954-ad787ad6-7221-4530-932f-42272163d3c9.png"
          alt="github calender"
        /> */}
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />

        <div className={styles.btn}>
          <a href="#home">
            <span id={styles.myBtnn}>
              <img
                src="https://user-images.githubusercontent.com/91772445/148805842-2934cb2e-1420-419f-99ab-c49a2d1f15ff.png"
                alt="img"
                className={styles.upimg}
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
