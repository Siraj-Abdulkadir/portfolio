import "../styles/index.css";
import Card from "./card";
import HPR_logo from "../assets/images/card_logos/hpr-logo.png";
import Chatter_logo from "../assets/images/card_logos/chatter-logo.png";
import Lawyer_logo from "../assets/images/card_logos/lawyer-logo.png";
import TTS_logo from "../assets/images/card_logos/tts-logo.png";
import Fits_logo from "../assets/images/card_logos/fits-logo.png";
import QR_logo from "../assets/images/card_logos/qr-logo.png";
import MCT_logo from "../assets/images/card_logos/mct-logo.png";
import FM_logo from "../assets/images/card_logos/flowmade-logo.png";

function ProjectSection() {
  return (
    <div className="projects-section">
      <Card
        card_image={HPR_logo}
        card_title="House Renting Platform"
        card_description="Python based full stack web application that facilitates house buying, selling and renting."
      ></Card>
      <Card
        card_image={Lawyer_logo}
        card_title="Lawyer-Connect"
        card_description="Fully functional website to showcase the services, teams, and legal expertise of a law firm."
      ></Card>
      <Card
        card_image={Chatter_logo}
        card_title="Chatter"
        card_description="A social networking app that lets users connect with each other. built using Java."
      ></Card>
      <Card
        card_image={TTS_logo}
        card_title="Task Traking System"
        card_description="A Java based task tracking system where users get points when they complete a task."
      ></Card>
      <Card
        card_image={Fits_logo}
        card_title="Fits"
        card_description="Entertaining GUI game built with many levels, built with C++ "
      ></Card>
      <Card
        card_image={QR_logo}
        card_title="QR Code Generator"
        card_description="A QR Code generator for any link recived with a png format ready for use."
      ></Card>
      <Card
        card_image={MCT_logo}
        card_title="Morse Code Translator"
        card_description="Morse Code to ASCII code translator built with python."
      ></Card>
      <Card
        card_image={FM_logo}
        card_title="Flow Made"
        card_description="A website for drawing stunning flow charts and diagrams built using JavaScript."
      ></Card>
    </div>
  );
}

export default ProjectSection;
