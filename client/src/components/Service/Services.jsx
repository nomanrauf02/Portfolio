import React from "react";
import { Link } from "react-router-dom";
import { MdDeveloperMode } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        {/* <Slide direction="left">
          <Card
            Icon={MdDeveloperMode}
            title={"Responsive Website"}
            disc={`Crafting digital experiences from concept to reality. As a passionate full-stack developer, I thrive on turning innovative ideas into functional and user-centric web applications.
            With a blend of front-end finesse and back-end prowess, I architect seamless solutions that bridge creativity and technology.`}
          />
        </Slide> */}
        {/* <Slide direction="left">
          <Card
            Icon={MdDeveloperMode}
            title={"Data Analysis"}
            disc={`Experienced Data Analyst with a solid foundation in Power BI, ETL, SSIS, and T-SQL. Dedicated to leveraging data-driven insights to drive business improvement and optimize overall performance. Committed to deliver high-quality results, improve efficiency, and contribute to the team's strategic decision-making process.`}
          />
        </Slide> */}
        <Slide direction="left">
          <Card
            Icon={GoDatabase}
            title={"Database Management"}
            disc={`As a database designer, I'm passionate about structuring information that empowers businesses.
            From conceptual blueprints to intricate data models, I create robust databases that support informed business decisions.
            By harnessing data's power, we can unlock new dimensions of efficiency and knowledge.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Software Development"}
            disc={`As an application developer, I focus on creating client-centric solutions. 
            Whether it’s for iOS, Android, Windows, or other operating systems, I conduct thorough requirement analyses 
            and tweak software as needed. I also ensure regular software updates to keep your applications at the forefront of technology.`}
          />
        </Slide>
        {/* <Slide direction="left">
          <Card
            Icon={FaCode}
            title={"Design and Development"}
            disc={`Crafting innovative and efficient software solutions is my forte. I specialize in designing, developing, and testing software applications and computer systems. Whether it’s a computer game or a complex network control system, I ensure the use of the most suitable programming languages, platforms, and architectures.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={AiFillDatabase}
            title={"Maintenance and Support"}
            disc={`My commitment to your software doesn’t end at deployment. I provide ongoing support and maintenance, swiftly addressing issues, implementing updates, and incorporating user feedback to ensure your software remains robust and relevant.
`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BiWorld}
            title={"Systems Development"}
            disc={`Understanding your needs is my priority. I offer consultation services to discuss design elements, analyze user requirements, and coordinate software installation. My goal is to create software that not only meets but exceeds your expectations.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FaCode}
            title={"Consultation"}
            disc={`As a systems engineer, I build the backbone that your applications need to function. I ensure seamless communication between different software programs on one platform, create and enforce IT standards within an infrastructure, maintain documentation of IT systems, and stay updated with new technologies.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={AiFillDatabase}
            title={"Application Development"}
            disc={`
As an application developer, I focus on creating client-centric solutions. Whether it’s for iOS, Android, Windows, or other operating systems, I conduct thorough requirement analyses and tweak software as needed. I also ensure regular software updates to keep your applications at the forefront of technology.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BiWorld}
            title={"Deployment"}
            disc={`
I assist in the smooth transition of software releases from development to live operation. My deployment services ensure that your software is up and running in your production environment without a hitch.`}
          />
        </Slide> */}
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
