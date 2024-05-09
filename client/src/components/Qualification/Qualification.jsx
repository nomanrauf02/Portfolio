// import React, { useState } from "react";
// import styled from "styled-components";
// import { Zoom } from "react-awesome-reveal";
// import { GiGraduateCap } from "react-icons/gi";
// import { BsBriefcase } from "react-icons/bs";
// import { BiCalendar } from "react-icons/bi";
// import { Slide } from "react-awesome-reveal";

// function Qualification() {
//   const eduData = [
//     {
//       title: "BS Software Engineering",
//       Institute: "University of Sargodha",
//       place: "Sargodha, Pakistan",
//       year: "2019 - 2023",
//     },
//     {
//       title: "Web-Development",
//       Institute: "Bytes IT Center",
//       place: "Sargodha, Pakistan",
//       year: "2020 - 2021",
//     },
//     {
//       title: "Intermediate in Pre-Engineering",
//       Institute: "Punjab College",
//       place: "Chishtian, Pakistan",
//       year: "2017 - 2019",
//     },
//     {
//       title: "Matriculation",
//       Institute: "Misalee Public Science High School",
//       place: "Dahranwala, Pakistan",
//       year: "2015 - 2017",
//     },
//   ];
//   const expData = [
//     {
//       title: "Full stack Engineer",
//       organization: "Baskan Tech",
//       place: "Sharjah, United Arab Emirates",
//       year: "2023 - present",
//     },
//     {
//       title: "MERN Developer",
//       organization: "Fiver",
//       place: "Lahore Paksitan",
//       year: "2022 - 2023",
//     },
//     {
//       title: "Web Designer",
//       organization: "Fiver",
//       place: "Lahore Paksitan",
//       year: "2022 - 2023",
//     },
//   ];

//   const [showEducation, setShowEducation] = useState(true);

//   const toggleContent = () => {
//     setShowEducation(!showEducation);
//   };

//   return (
//     <Container id="qualification">
//       <Zoom>
//         <h1>Qualification</h1>
//         <p>
//           <span className="green">My personal journey</span>
//         </p>
//       </Zoom>
//       <ToggleDiv>
//         <Heading>
//           <Button onClick={() => setShowEducation(true)} active={showEducation}>
//             <span>
//               <GiGraduateCap />
//             </span>
//             Education
//           </Button>
//           <Button
//             onClick={() => setShowEducation(false)}
//             active={!showEducation}
//           >
//             <span>
//               <BsBriefcase />
//             </span>
//             Experience
//           </Button>
//         </Heading>
//         <ToggleContent>
//           <VerticalLine />
//           <Content>
//             {showEducation &&
//               eduData.map((Data, index) => (
//                 <Box index={index}>
//                   <Slide direction={index % 2 !== 0 ? "right" : "left"}>
//                     <h4>{Data.title}</h4>
//                     <h6>{Data.place}</h6>
//                     <p>
//                       <span>
//                         <BiCalendar />
//                       </span>
//                       {Data.year}
//                     </p>
//                   </Slide>
//                 </Box>
//               ))}
//             {!showEducation &&
//               expData.map((Data, index) => (
//                 <Box key={index} index={index}>
//                   <Slide direction={index % 2 !== 0 ? "right" : "left"}>
//                     <h4>{Data.title}</h4>
//                     <h6>{Data.place}</h6>
//                     <p>
//                       <span>
//                         <BiCalendar />
//                       </span>
//                       {Data.year}
//                     </p>
//                   </Slide>
//                 </Box>
//               ))}
//           </Content>
//         </ToggleContent>
//       </ToggleDiv>
//     </Container>
//   );
// }

// export default Qualification;

// const Container = styled.div`
//   width: 80%;
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 3rem 0;
//   text-align: center;
//   position: relative;
//   @media (max-width: 840px) {
//     width: 90%;
//   }
//   h1 {
//     font-size: 1.9rem;
//   }

//   p {
//     width: 28rem;
//     margin: 0 auto;
//     padding: 1rem 0;
//     font-size: 0.9rem;
//     @media (max-width: 500px) {
//       width: 90%;
//     }
//   }
// `;

// const ToggleDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Heading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: auto;
//   padding: 1rem;
//   width: 60%;
//   @media (max-width: 500px) {
//     width: 90%;
//   }
// `;

// const Button = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0.5rem;
//   font-size: 1rem;
//   gap: 4px;
//   border: none;
//   border-radius: 5px;
//   filter: drop-shadow(0px 4px 5px #01be9551);
//   cursor: pointer;
//   :hover {
//     filter: drop-shadow(0px 6px 9px #01be9551);
//   }
//   span {
//     display: flex;
//     align-items: center;
//     margin-right: 0.5rem;
//     font-size: 1.2rem;
//   }
// `;

// const ToggleContent = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   width: 60%;
//   @media (max-width: 500px) {
//     width: 100%;
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 100%;
// `;

// const Box = styled.div`
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

// const VerticalLine = styled.div`
//   position: absolute;
//   width: 1px;
//   background-color: #01be95;
//   height: 90%;
//   left: 50%;
//   margin: 1rem;
//   transform: translateX(-50%);
// `;

import React, { useState } from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";
import { GiGraduateCap } from "react-icons/gi";
import { BsBriefcase } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { Slide } from "react-awesome-reveal";
import Box from "./Box";

function Qualification() {
  const eduData = [
    {
      title: "BS Software Engineering",
      Institute: "University of Sargodha",
      place: "Sargodha, Pakistan",
      year: "2019 - 2023",
    },
    // {
    //   title: "Backend Developer",
    //   Institute: "Bytes IT Center",
    //   place: "Lahore, Pakistan",
    //   year: "Dec 2023 - present",
    // },
    {
      title: "Intermediate in Pre-Engineering",
      Institute: "Punjab College",
      place: "Sahiwal, Pakistan",
      year: "2017 - 2019",
    },
    {
      title: "Matriculation",
      // Institute: "Misalee Public Science High School",
      place: "Sahiwal, Pakistan",
      year: "2015 - 2017",
    },
  ];
  const expData = [
    {
      title: "Backend Developer",
      organization: "Fiver",
      place: "Lahore, Pakistan",
      year: "DEC 2023 - present",
    },
    {
      title: "Software Engineer Intern",
      organization: "UHS",
      place: "Lahore, Pakistan",
      year: "AUG 2023 - NOV 2023",
    },
    {
      title: " Freelancing",
      organization: "Fiver",
      place: "Fiver",
      year: "2022 - 2023",
    },
  ];

  const [showEducation, setShowEducation] = useState(true);

  const toggleContent = () => {
    setShowEducation(!showEducation);
  };

  return (
    <Container id="qualification">
      <Zoom>
        <h1>Qualification</h1>
        <p>
          <span className="green">My personal journey</span>
        </p>
      </Zoom>
      <ToggleDiv>
        <Heading>
          <Button onClick={() => setShowEducation(true)} active={showEducation}>
            <span>
              <GiGraduateCap />
            </span>
            Education
          </Button>
          <Button
            onClick={() => setShowEducation(false)}
            active={!showEducation}
          >
            <span>
              <BsBriefcase />
            </span>
            Experience
          </Button>
        </Heading>
        <ToggleContent>
          <VerticalLine />
          <Content>
            {showEducation &&
              eduData.map((Data, index) => (
                <Box
                  key={index}
                  index={index}
                  title={Data.title}
                  place={Data.place}
                  year={Data.year}
                />
              ))}
            {!showEducation &&
              expData.map((Data, index) => (
                <Box
                  key={index}
                  index={index}
                  title={Data.title}
                  place={Data.place}
                  year={Data.year}
                />
              ))}
          </Content>
        </ToggleContent>
      </ToggleDiv>
    </Container>
  );
}

export default Qualification;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const ToggleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem;
  width: 60%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  gap: 4px;
  border: none;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 5px #01be9551);
  cursor: pointer;
  :active {
    background-color: #01be9551;
  }
  :hover {
    filter: drop-shadow(0px 6px 9px #01be9551);
  }
  span {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const ToggleContent = styled.div`
  // background-color: red;
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  background-color: #01be95;
  height: 80%;
  left: 45%;
  margin: 1rem;
  transform: translateX(-50%);
`;
