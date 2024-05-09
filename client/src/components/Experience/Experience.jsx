import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

function Experience() {
  return (
    <Container id="skill">
      <Slide direction="down">
        {/* <h1>
          My <span className="green">skills</span>
        </h1>
        <h4>Technical level</h4> */}
      </Slide>
    </Container>
  );
}
export default Experience;

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
