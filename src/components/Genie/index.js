import React, { useEffect } from "react";
import "./genie.css";
import GeniePicture from "../../assets/genie.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Genie = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="slide-up"
      style={{
        width: "40%",
        height: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: 1,
      }}
    >
      <a
        className="bubble bubble-bottom-left"
        href="mailto: info@krooltoys.com"
        style={{
          textDecoration: "none",
          marginBottom: "30px",
          marginLeft: "50%",
        }}
      >
        Click me to receive 3 wishes.
      </a>
      <a href="mailto: info@krooltoys.com" style={{ width: "40%" }}>
        <img width="100%" height="auto" src={GeniePicture} alt="genie" />
      </a>
    </div>
  );
};

export default Genie;
