import React, {useEffect} from "react";
import "./home.css";
import video from "../../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import'aos/dist/aos.css'

const Home = () => {


  //hook
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div data-aos= 'fade-up' className="textDiv">

          <span  className="smallText">Our Packagev</span>

          <h1  className="homeTitle">Search your Holiday</h1>
        </div>

        <div data-aos= 'fade-up' className="carDive grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input ">
              <input
                type="text"
                placeholder="Enter name here...."
              />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>

            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icons"/>
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos= 'fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon2"/>
            <AiOutlineInstagram className="icon2"/>
            <SiTripadvisor className="icon2"/>
          </div>
        
          <div className="leftIcons">
          <BsListTask className="icon2"/>
          <TbApps className="icon2"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
