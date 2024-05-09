import React, { useState } from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { Icon, disc, title } = props;

  const limit = 100; // Set the character limit for truncation

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Container>
      <span className='green'><Icon/></span>
      <h1>{title}</h1>
      <p>
        {showFullText ? disc : `${disc.slice(0, limit)}...`}
        {!showFullText && disc.length > limit && <ReadMoreButton onClick={toggleShowMore}>Read More</ReadMoreButton>}
      </p>
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #01BE96; 
  cursor: pointer;
`;

export default Card;
