import React, {useEffect} from "react";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import { FiChevronRight } from "react-icons/fi";

import "./footer.css";
import video2 from "../../Assets/video2.mp4";

import Aos from 'aos'
import'aos/dist/aos.css'

const Footer = () => {

  //hook
  useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])
  return (
    <section className="footer ">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container grid">
        <div className="contactDiv flex">
          <div data-aos= 'fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos= 'fade-up' type="text" placeholder="Enter Email Address" />
            <button data-aos= 'fade-up' className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard grid">
          <div className="footerIntro ">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <MdOutlineTravelExplore className="icont" /> Trave.
              </a>
            </div>
            <div data-aos= 'fade-up' className="footerParagraph">
              A travel agency is a private retailer or public service that
              provides travel and tourism-related services to the general public
              on behalf of accommodation or travel suppliers to offer different
              kinds of travelling packages for each destination.
            </div>

            <div data-aos= 'fade-up' className="footerSocials flex">
              <AiOutlineTwitter className="iconf" />
              <AiFillYoutube className="iconf" />
              <AiFillInstagram className="iconf" />
              <FaTripadvisor className="iconf" />
            </div>
          </div>
          <div className="footerLinks grid ">
              <div data-aos= 'fade-up' data-aos-duration= '3000' className="linkGroup">
                <span className="groupTitle">OUR AGENCY</span>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Insurence
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Payment
                </li>
              </div>

              <div data-aos= 'fade-up' data-aos-duration= '4000' className="linkGroup">
                <span className="groupTitle">PERTNERS</span>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Bookings
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Rentcars
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  HostelWorld
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  TripAdvisor
                </li>
              </div>

              <div data-aos= 'fade-up' data-aos-duration= '5000' className="linkGroup">
                <span className="groupTitle">LAST MINUTE</span>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  London
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  California
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Indonesia
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  Erurope
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="iconff" />
                  India
                </li>
              </div>
          </div> 
          <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHTS RESERVED - BOOKING-KARO ❤ 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
