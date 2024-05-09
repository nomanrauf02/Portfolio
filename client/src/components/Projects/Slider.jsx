import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import ontologyImage from "../../assets/onto.png";
import lawyerImage from "../../assets/lawyer.png";
import invoiceImage from "../../assets/invoice.png";
import uniImage from "../../assets/Poster.png";
import foodyImage from "../../assets/foody.jpg";
import BankImage from "../../assets/Bank_loan1.jpg";
import SalesImage from "../../assets/pizza_sales1.jpg";
import Sales2Image from "../../assets/pizza_sales2.jpg";

let data = [
  {
    img: foodyImage,
    disc: "I have been working on a restaurant webpages project for a local client as a MERN stack developer. I have built multiple features such as menu navigation and customer reviews.",
  },
  {
    img: BankImage,
    disc: "As a skilled Data Analyst, I use Power BI to simplify complex loan data and display all details on dashboards.",
  },
  {
    img: SalesImage,
    disc: "As a Data Analyst, I have been working with the Sales department to create dashboards and use Microsoft Power BI.",
  },
  {
    img: Sales2Image,
    disc: "As a Data Analyst, I have been working with the Sales department to create dashboards nd simplify complex data and use Microsoft Power BI.",
  },
  {
    img: lawyerImage,
    disc: "I have been on WordPress for designing a blogging website using LawyerZone Theme. I have been customizing the design to get the desired look. I have also added a few plugins to make the website more user-friendly.",
  },
  {
    img: ontologyImage,
    disc: "My Semantic Web course involved me working on a cricket ontology regarding Meta Data.",
  },
  {
    img: invoiceImage,
    disc: "The IMS project involves creating invoices for internet service customers and saving the data on a database, as well as informing the administrator of revenue and profit. The database keeps a record of the details of the customers and the Internet services that we offer them.",
  },
  {
    img: uniImage,
    disc: "I have been working as a Web developer on the project of a Professor's attendance system using a bio-metric machine and displaying details on a digital noticeboard using React.js, Node.js and MySQL.",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
