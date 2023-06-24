import React, {useEffect} from "react";
import "./main.css";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos from 'aos'
import'aos/dist/aos.css'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgScr: img1,
    destTitle: "Ladakh",
    location: "India",
    grade: "CULTUAL RELAX",
    fees: "$700",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 2,
    imgScr: img2,
    destTitle: "Kasmir",
    location: "India",
    grade: "CULTUAL RELAX",
    fees: "$900",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 3,
    imgScr: img3,
    destTitle: "Manali",
    location: "India",
    grade: "CULTUAL RELAX",
    fees: "$1000",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 4,
    imgScr: img4,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTUAL RELAX",
    fees: "$700",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 5,
    imgScr: img5,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTUAL RELAX",
    fees: "$700",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 6,
    imgScr: img6,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTUAL RELAX",
    fees: "$700",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 7,
    imgScr: img7,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTUAL RELAX",
    fees: "$700",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 8,
    imgScr: img8,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTUAL RELAX",
    fees: "$700",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
  {
    id: 9,
    imgScr: img9,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTUAL RELAX",
    fees: "$700",
    description:
      "to go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another.",
  },
];

const Main = () => {

  //hook
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos= 'fade-right' className="title">Most visited destinations</h3>
      </div>
      <div className="Content grid">
        {Data.map(
          ({ id, imgScr, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos= 'fade-up' className="singleDestination">
                <div className="imageDiv">
                  <img src={imgScr} alt="destTitle" />
                </div>
                <div className="cardInfo">
                  <h4 className="desTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon3" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAIL <HiOutlineClipboardCheck className="icon4" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
