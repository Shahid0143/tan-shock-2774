import React from "react";
import Sideb from "./Sideb";
import ProductList from "./ProductList";
import "../components/Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "./Sliderr";
import Slider from "react-slick";

const Full_body_health_checkups = [
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.7",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "3.2",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
    name: "Tony stark",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
];
const slider3 = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Main() {
  return (
    <div className="ppage" id="ppage">
      <div className="top">
        <h3 className="reco">Most recommended</h3>
        <div className="heading">
          <h1>Products</h1>
          <button>View All</button>
        </div>
      </div>

      <div className="main">
        <Sideb />
        <ProductList />
      </div>
      <div className="banner">
        <div className="d1">
          <h1>Avail a free consultation and start</h1>
          <h1>your healtcare journey today</h1>
          <button className="book_now">REGISTER NOW</button>
        </div>
        <div>
          <img
            width="100%"
            src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/consult-doc.png"
            alt=""
          />
        </div>
      </div>

      <div className="testimonial">
        <h2>Hear from our patients</h2>
        <h1>Testimonials & Stories</h1>
        <div className="slider">
          <Slider {...slider3}>
            {Full_body_health_checkups.map((item, index) => (
              <Sliderr
                name={item.name}
                img={item.img}
                desc={item.desc}
                rating={item.rating}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className="reachout">
        <h1>Meet with Our expert online</h1>
        <div className="form">
          <form action="">
            <div className="childdd">
              <select name="" id="">
                <option value="">Choose Department</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <select name="" id="">
                <option value="">Choose Specialist</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <input type="text" name="" id="" placeholder="Your Name" />
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email Address"
              />
            </div>
            <div className="childdd2">
              <input type="phone" name="" id="" placeholder="Your Phone" />
              <input type="date" name="" id="" placeholder="Select Date" />
              <input type="time" name="" id="" placeholder="Select Time" />
            </div>
            <button className="form-btn">Submit</button>
          </form>
        </div>
      </div>

      <div className="foot">
        <div className="m1">
          <h2>All Medicine</h2>
          <p>Health&Care</p>
          <p>BeautyCare</p>
        </div>
        <div className="m1">
          <h2>Doctor</h2>
          <p>Phishtherapy</p>
          <p>Heart Specilist</p>
        </div>
        <div className="m1">
          <h2>Hospital</h2>
          <p>Government Listed</p>
          <p>Top Private</p>
        </div>
        <div className="m1">
          <h2>About Us</h2>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="hh">
        <div>
          <h1>@Health Care 2023 All rights is reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
