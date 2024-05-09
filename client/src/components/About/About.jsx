import React, { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { FaCheckCircle, FaCalendarAlt, FaHeadset } from "react-icons/fa";
import AboutImg from "../../assets/Noman.png";
import Boxes from "./Boxes";
import { GoFile } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
  const [loading, setLoading] = useState(false);
  const boxData = [
    {
      title: "Completed",
      value: "10+ Projects",
      icon: <FaCheckCircle />,
    },
    {
      title: "Experience",
      value: "2+ years",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Support",
      value: "24/7",
      icon: <FaHeadset />,
    },
  ];

  return (
    <Container id="about">
      <Slide direction="down">
        <h1>
          About <span className="green">Me</span>
        </h1>
        <h4>My Introduction</h4>
      </Slide>
      <AboutMeSection>
        <ImageContainer>
          {/* <img src={AboutImg} alt="My Image" /> */}
          <img src={AboutImg} alt="My Image" height="300" width="350" />
        </ImageContainer>
        <InfoContainer>
          <BoxesContainer>
            {boxData.map((box, index) => {
              let direction;
              if (index % 3 === 0) {
                direction = "left";
              } else if (index % 3 === 1) {
                direction = "up";
              } else {
                direction = "right";
              }
              return (
                <Slide direction={direction} key={index}>
                  <Boxes title={box.title} value={box.value} icon={box.icon} />
                </Slide>
              );
            })}
          </BoxesContainer>

          <p>
          As a dedicated Full Stack Developer, I bring a year of rich experience, with a proven track record of versatility across diverse projects. Currently specializing as a backend developer, I'm deeply committed to honing my skills and staying abreast of industry trends. Beyond the confines of work, I'm fueled by my passion for technology and literature, continuously nurturing both personal and professional growth. </p>
          <button disabled style={{ cursor: "not-allowed" }}>
            Download CV
            <span>
              <MdOutlineFileDownload />
            </span>
          </button>
        </InfoContainer>
      </AboutMeSection>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }
  h4 {
    padding-top: 1rem;
  }
`;

const AboutMeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 40%;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    flex: 0 0 100%;
  }
`;

const InfoContainer = styled.div`
  flex: 0 0 55%;

  h1 {
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
  span {
    margin-left: 2px;
  }
`;

const BoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow boxes to wrap to new row */
  justify-content: space-between; /* Spread boxes evenly */
  margin-bottom: 2rem;

  /* Ensure maximum 3 boxes per row */
  & > * {
    flex-basis: calc(33.333% - 10px); /* Adjust based on box margins */
    margin-bottom: 10px; /* Add bottom margin between rows */
  }
`;
