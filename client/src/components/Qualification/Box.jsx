// import React from "react";
// import styled from "styled-components";
// import { BiCalendar } from "react-icons/bi";
// import { Slide } from "react-awesome-reveal";

// const Box = ({ index, title, place, year }) => {
//   return (
//     <StyledBox index={index}>
//       <Slide direction={index % 2 !== 0 ? "right" : "left"}>
//         <h4>{title}</h4>
//         <h6>{place}</h6>
//         <p>
//           <span>
//             <BiCalendar />
//           </span>
//           {year}
//         </p>
//       </Slide>
//     </StyledBox>
//   );
// };

// const StyledBox = styled.div`
//   display: flex;
//   padding: 1rem;
//   flex-direction: column;
//   text-align: center;
//   height: auto;
//   width: 16rem;
//   ${({ index }) => index % 2 !== 0 && "margin-left: auto;"}
//   @media (max-width: 500px) {
//     width: 10rem;
//     overflow: hidden;
//   }
//   h4 {
//     display: flex;
//     text-align: start;
//     padding-bottom: 0.5rem;
//     @media (max-width: 500px) {
//       font-size: 0.8rem;
//     }
//   }
//   h6 {
//     display: flex;
//     align-items: center;
//     margin-bottom: 1rem;
//   }
//   p {
//     display: flex;
//     align-items: center;
//     margin-bottom: auto;
//     font-size: 0.8rem;
//   }
//   span {
//     display: flex;
//     align-items: center;
//     font-size: 1.2rem;
//     margin-right: 0.5rem;
//   }
// `;

// export default Box;

import React from "react";
import styled from "styled-components";
import { BiCalendar } from "react-icons/bi";
import { Slide } from "react-awesome-reveal";

const Box = ({ index, title, place, year }) => {
  return (
    <StyledBox index={index}>
      <Slide direction={index % 2 !== 0 ? "right" : "left"}>
        <h4>{title}</h4>
        <h6>{place}</h6>
        <p>
          <span>
            <BiCalendar />
          </span>
          {year}
        </p>
      </Slide>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  height: auto;
  width: 12rem;
  ${({ index }) => index % 2 !== 0 && "margin-left: auto;"}
  @media (max-width: 500px) {
    width: 10rem;
    overflow: hidden;
  }
  h4 {
    display: flex;
    text-align: start;
    padding-bottom: 0.5rem;
    font-size: 0.8rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  h6 {
    display: flex;
    align-items: left;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
      text-align: start;
    }
  }
  p {
    display: flex;
    align-items: left;
    font-size: 0.8rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
      text-align: start;
    }
  }
  span {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

export default Box;
