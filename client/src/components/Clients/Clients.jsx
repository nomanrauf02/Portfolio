import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import wahabImage from "../../assets/wahab.jpg";
import mudassarImage from "../../assets/mudassar.jpg";
import bilalImage from "../../assets/bilal.jpg";
import cheemaImage from "../../assets/nomi.jpg";



let clients = [
  {
    name: "Noman Aleem ",
    position: "Doctor",
    stars: 5,
    disc: `With confidence, I can say that this is the best place to get your best website done, with incredibly helpful and professional service 
        Noman went above and beyond to do deliver this project with outstanding service. Thank you!`,
    img_filename: cheemaImage ,
  },
  // {
  //   name: "Wahab Bandial",
  //   position: "web developer",
  //   stars: 4,
  //   disc: `Work done is of very good quality. And requests have been noted dutifully.
  //       Extremely professional service with understanding the client's requirements. 
  //       I would definitely be working with him again in the future for any website related projects.`,
  //   img_filename: wahabImage,
  // },
  {
    name: "Mudassar Alam",
    position: "Software Engineer",
    stars: 5,
    disc: `
    We are thoroughly impressed by Noman's exceptional proficiency in mobile app development. His expertise surpasses expectations, promising remarkable collaboration in the future. His professional skills are truly outstanding, ensuring a partnership built on excellence and innovation.`,
    img_filename: mudassarImage,
  },
  {
    name: "Bilal Hafeez",
    position: "Business Developer Executive",
    stars: 5,
    disc: `Noman Rauf is a highly accomplished full-stack engineer, and his dedication to excellence is evident in every aspect of his work, making him a true asset to any project.
         His professionalism and impressive skills make him a highly recommended professional.`,
    img_filename: bilalImage,
  },
];
var settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green">testimonials</span>
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
