import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/NotFound.css";

import astronaut from "../images/empty-state.png";
import planet from "../images/planet.png";
import robot from "../images/web.png";

export default function NotFound() {

  useEffect(() => {

    const handleMouseMove = (e) => {

      // const x = e.clientX / window.innerWidth;
      // const y = e.clientY / window.innerHeight;

      document.querySelectorAll(".parallax").forEach((el)=>{

        const speed = el.getAttribute("data-speed");

        const xMove = (window.innerWidth - e.pageX * speed) / 100;
        const yMove = (window.innerHeight - e.pageY * speed) / 100;

        el.style.transform = `translate(${xMove}px, ${yMove}px)`;

      });

    };

    window.addEventListener("mousemove",handleMouseMove);

    return () => window.removeEventListener("mousemove",handleMouseMove);

  },[]);

  return (

    <div className="nf-page">

      <div className="stars"></div>

      <div className="nf-container">

        <h1 className="nf-404">404</h1>

        <h2 className="nf-title">
          Our AI Explorer Couldn't Find That Page
        </h2>

        <p className="nf-sub">
          Looks like this page drifted into deep space.
          Our AI robot and astronauts are searching the galaxy 🔭
        </p>


        <div className="nf-illustrations">

          <img
            src={astronaut}
            alt="astronaut"
            className="icon parallax"
            data-speed="3"
          />

          <img
            src={planet}
            alt="planet"
            className="icon parallax planet"
            data-speed="2"
          />

          <img
            src={robot}
            alt="robot"
            className="icon parallax"
            data-speed="4"
          />

        </div>


        <Link to="/" className="nf-btn">
          Return To Homepage
        </Link>

      </div>

    </div>

  );

}
