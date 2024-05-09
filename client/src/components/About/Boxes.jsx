import React from "react";
import styled from "styled-components";

const Boxes = ({ title, value, icon }) => {
  return (
    <BoxWrapper>
      <span className="green">
        <Icon>{icon}</Icon>
      </span>
      <h3>{title}</h3>
      <p>{value}</p>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  background-color: #2c2c38;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 8rem;
  height: 8rem;
  padding: 1rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const Icon = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export default Boxes;
