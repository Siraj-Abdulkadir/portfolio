import "../styles/index.css";
import GCard from "./GCard";
import HeaderText from "./HeaderText";
import "../styles/projects-section.css";
import EID_MUBARAK from "../assets/images/DesignWorks/EidMubarak.png";
import EID_ADHA from "../assets/images/DesignWorks/EidAlAdha.jpg";
import WE_ARE_HIRING from "../assets/images/DesignWorks/WeAreHiring.jpg";
import ORANGE_JUICE from "../assets/images/DesignWorks/Orange-Juice.png";
import { useState } from "react";

const left_icon = "\u226a";
const right_icon = "\u226b";

const IMAGE_URLS = [EID_MUBARAK, EID_ADHA, WE_ARE_HIRING, ORANGE_JUICE];

function ProjectSection() {
  const [FirstImageIndex, SetFirstImageIndex] = useState(0);
  const [SecondImageIndex, SetSecondImageIndex] = useState(1);
  const [ThirdImageIndex, SetThirdImageIndex] = useState(2);

  function ShowPrevFunction() {
    SetFirstImageIndex((index) => {
      if (index == 0) {
        return IMAGE_URLS.length - 1;
      }
      return index - 1;
    });
    SetSecondImageIndex((index) => {
      if (index == 0) {
        return IMAGE_URLS.length - 1;
      }
      return index - 1;
    });
    SetThirdImageIndex((index) => {
      if (index == 0) {
        return IMAGE_URLS.length - 1;
      }
      return index - 1;
    });
  }
  function ShowNextFunction() {
    SetFirstImageIndex((index) => {
      if (index == IMAGE_URLS.length - 1) {
        return 0;
      }
      return index + 1;
    });
    SetSecondImageIndex((index) => {
      if (index == IMAGE_URLS.length - 1) {
        return 0;
      }
      return index + 1;
    });
    SetThirdImageIndex((index) => {
      if (index == IMAGE_URLS.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  return (
    <>
      <div className="my-works-title">
        <HeaderText
          header_message="Social Media"
          header_style="g-headers"
        ></HeaderText>
      </div>
      <div className="projects-section">
        <div className="left-g-card">
        <GCard
          image_src={IMAGE_URLS[FirstImageIndex]}
          image_description="Eid Mubarak Image"
        ></GCard>
        </div>
        <div className="middle-g-card">
        <GCard
          image_src={IMAGE_URLS[SecondImageIndex]}
          image_description="Eid Mubarak Image"
        ></GCard>
        </div>
        <div className="right-g-card">
        <GCard
          image_src={IMAGE_URLS[ThirdImageIndex]}
          image_description="Eid Mubarak Image"
        ></GCard>
        </div>
        <button
          onClick={ShowPrevFunction}
          className="slider-button left-slider-button"
        >
          {left_icon}
        </button>
        <button
          onClick={ShowNextFunction}
          className="slider-button right-slider-button"
        >
          {right_icon}
        </button>
      </div>
    </>
  );
}

export default ProjectSection;
