import React from "react";
import styled from "styled-components";
import { BiBadgeCheck } from "react-icons/bi";

const Card = ({ title, values }) => {
  return (
    <Container>
      <h2>
        <span className="green">{title}</span>
      </h2>
      <List>
        {values.slice(0, Math.ceil(values.length / 2)).map((value, index) => (
          <li key={index}>
            <span>
              <BiBadgeCheck />
            </span>
            {value}
          </li>
        ))}
      </List>
      <List>
        {values.slice(Math.ceil(values.length / 2)).map((value, index) => (
          <li key={index}>
            <span>
              <BiBadgeCheck />
            </span>
            {value}
          </li>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  background-color: #191923;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  height: 16rem;
  padding: 1rem;
  text-align: center;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-top: 1.5rem;
  width: 50%;
  float: left;

  li {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  span {
    margin-right: 0.5rem;
  }
`;

export default Card;
