import "../styles/index.css";
import GCard from "./GCard";
import HeaderText from "./HeaderText";
import "../styles/projects-section.css";
import EID_MUBARAK from "../assets/images/DesignWorks/EidMubarak.png";
import EID_ADHA from "../assets/images/DesignWorks/EidAlAdha.jpg";
import WE_ARE_HIRING from "../assets/images/DesignWorks/WeAreHiring.jpg";
import ORANGE_JUICE from "../assets/images/DesignWorks/Orange-Juice.png";
import TRAVEL_POSTER from "../assets/images/DesignWorks/Social-Media-Post.jpg";
import BF_POSTER from "../assets/images/DesignWorks/Independence-day-poster.jpg";
import MINI_FURNICHER from "../assets/images/DesignWorks/minifurniture.jpg";
import PRICE_LIST from "../assets/images/DesignWorks/pricelist.jpg";
import { useState } from "react";

const left_icon = "\u226a";
const right_icon = "\u226b";

const IMAGE_URLS = [EID_MUBARAK, EID_ADHA, WE_ARE_HIRING, MINI_FURNICHER];
const POSTER_URLS = [TRAVEL_POSTER, BF_POSTER, ORANGE_JUICE, PRICE_LIST];

function ProjectSection() {
  const [FirstImageIndex, SetFirstImageIndex] = useState(0);
  const [SecondImageIndex, SetSecondImageIndex] = useState(1);
  const [ThirdImageIndex, SetThirdImageIndex] = useState(2);
  const [FirstPosterIndex, SetFirstPosterIndex] = useState(0);
  const [SecondPosterIndex, SetSecondPosterIndex] = useState(1);
  const [ThirdPosterIndex, SetThirdPosterIndex] = useState(2);

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
  function ShowPrevFunctionP() {
    SetFirstPosterIndex((index) => {
      if (index == 0) {
        return POSTER_URLS.length - 1;
      }
      return index - 1;
    });
    SetSecondPosterIndex((index) => {
      if (index == 0) {
        return POSTER_URLS.length - 1;
      }
      return index - 1;
    });
    SetThirdPosterIndex((index) => {
      if (index == 0) {
        return POSTER_URLS.length - 1;
      }
      return index - 1;
    });
  }
  function ShowNextFunctionP() {
    SetFirstPosterIndex((index) => {
      if (index == POSTER_URLS.length - 1) {
        return 0;
      }
      return index + 1;
    });
    SetSecondPosterIndex((index) => {
      if (index == POSTER_URLS.length - 1) {
        return 0;
      }
      return index + 1;
    });
    SetThirdPosterIndex((index) => {
      if (index == POSTER_URLS.length - 1) {
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

      <div className="my-works-title">
        <HeaderText
          header_message="Posters"
          header_style="g-headers"
        ></HeaderText>
      </div>
      <div className="projects-section">
        <div className="left-g-card">
          <GCard
            image_src={POSTER_URLS[FirstPosterIndex]}
            image_description="Eid Mubarak Image"
          ></GCard>
        </div>
        <div className="middle-g-card">
          <GCard
            image_src={POSTER_URLS[SecondPosterIndex]}
            image_description="Eid Mubarak Image"
          ></GCard>
        </div>
        <div className="right-g-card">
          <GCard
            image_src={POSTER_URLS[ThirdPosterIndex]}
            image_description="Eid Mubarak Image"
          ></GCard>
        </div>
        <button
          onClick={ShowPrevFunctionP}
          className="slider-button left-slider-button"
        >
          {left_icon}
        </button>
        <button
          onClick={ShowNextFunctionP}
          className="slider-button right-slider-button"
        >
          {right_icon}
        </button>
      </div>
    </>
  );
}

export default ProjectSection;
