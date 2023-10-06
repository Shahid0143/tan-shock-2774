import React from "react";
import Sideb from "./Sideb";
import ProductList from "./ProductList";
import "../style/Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "./Sliderr";
import Slider from "react-slick";
import { SearchIcon } from "@chakra-ui/icons";
import Footer from "./Footer";

const Full_body_health_checkups = [
  {
    img: "https://replicate.delivery/pbxt/fAiVrdoqukQiEyCxqJUUeukNVDnnj9XWlYMzsmCfjd49JGWjA/output_1.png",
    name: "Paracetamol",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/medicines%2C-nirbhaya-1_647_080916110045.jpg?VersionId=fm_xnarJLgfRcSGjlItWvidNoAH1aXHn",
    name: "AKtshtra",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.7",
  },
  {
    img: "https://cdn5.vectorstock.com/i/1000x1000/85/79/medical-bottles-and-pills-medications-aspirin-vector-23908579.jpg",
    name: "Siraf Happy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "3.2",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPDrHKyhsE8IZCyue_f7sNwDh65Fg6KDIBg&usqp=CAU",
    name: "Milkogen",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzHH5NRZy6BfqH1aSvatPcrF4fZ94w2DitjIvBWL-pnxTyhxqOhGdc3-faYfgJA3gp68&usqp=CAU",
    name: "Serpina",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IEWtLrcvJ0hXwEUZ2Knx62tIuTQyMTZt3g&usqp=CAU",
    name: "Imodium",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://assets.lybrate.com/img/otc/product/sbl-five-phos-tablet-3x-0",
    name: "Hemopathic",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5iAyq1rJNnMc3ZpizXlyCJVbU_R1NryjYtM1TAgAnM_fQD30XqS9xfGWZdotKRyLWL4&usqp=CAU",
    name: "Pelvorin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://www.zyrtec.com/sites/zyrtec_us/files/styles/product_carousel_desktop/public/product-images/1_zyrtec-allergy-dye-free-chewable.webp?timestamp=1680526939",
    name: "Zyrick",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://hips.hearstapps.com/netdoctor.cdnds.net/15/46/1600x1600/square-1445641623-1442403130-antibiotics.jpg?resize=480:*",
    name: "PodinHarra",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/l/40214156_1-dr-morepen-kabz-dur-ayurvedic-constipation-relief-tablets.jpg",
    name: "Kabz Dur",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://images.glowroad.com/faceview/j3i/b9c/i7d/ae/imgs/1633582017330_21_19_ShotBigCapsuleBigPenisOil-xlgnm400x400.jpg",
    name: "Short Big",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio dolores? Exercitationem quo sapiente temporibus nihil sint molestias illum eius.",
    rating: "4.1",
  },
  {
    img: "https://homeomart.com/cdn/shop/products/SBL-Bio-Combination-No-20-Tablets-for-Skin-Diseases-SBLBCS2025_53d5ee24-43ac-44aa-9830-dc0a3f7079da.jpg?v=1571713386",
    name: "Bio-Combo",
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
    <>
      <div className="ppage" id="ppage">
        <div className="top">
          <div className="search">
            <label htmlFor="">Search : </label>
            <input type="text" placeholder="search for products" />
            <span className="l">
              <SearchIcon
                style={{ position: "relative", bottom: "27", right: "21" }}
              />
            </span>
          </div>
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
      </div>
      <Footer />
    </>
  );
}

export default Main;
