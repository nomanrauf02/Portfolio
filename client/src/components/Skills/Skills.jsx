import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import Card from "./Card";

const Skills = () => {
  const boxData = [
   
    {
      title: "Frontend Skills",
      value: ["HTML", "Tailwind CSS", "JavaScript", "ReactJS", "Bootstrap", "Material UI"],
    },
    {
      title: "Backend Skills",
      value: ["Node.js", "SQL", "MongoDB", "Git","Express.js"],
    },
  ];

  return (
    <Container id="skill">
      <Slide direction="down">
        <h1>
          My <span className="green">skills</span>
        </h1>
        <h4>Technical level</h4>
      </Slide>
      <Cards>
        {boxData.map((box, index) => {
          let direction;
          if (index % 3 === 0) {
            direction = "left";
          } else if (index % 3 === 1) {
            direction = "right";
          } else {
            direction = "up";
          }
          return (
            <Slide direction={direction} key={index}>
              <Card title={box.title} values={box.value} />
            </Slide>
          );
        })}
      </Cards>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h4 {
    padding-top: 1rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
