import "../styles/index.css";
import Card from "./card";
function ProjectSection() {
  return (
    <div className="projects-section">
      <Card
        card_image="./public/hpr-logo.png"
        card_title="House Renting Platform"
        card_description="Python based full stack web application that facilitates house buying, selling and renting."
      ></Card>
      <Card
        card_image="./public/lawyer-logo.png"
        card_title="Lawyer-Connect"
        card_description="Fully functional website to showcase the services, teams, and legal expertise of a law firm."
      ></Card>
      <Card
        card_image="./public/chatter-logo.png"
        card_title="Chatter"
        card_description="A social networking app that lets users connect with each other. built using Java."
      ></Card>
      <Card
        card_image="./public/tts-logo.png"
        card_title="Task Traking System"
        card_description="A Java based task tracking system where users get points when they complete a task."
      ></Card>
      <Card
        card_image="./public/fits-logo.png"
        card_title="Fits"
        card_description="Entertaining GUI game built with many levels, built with C++ "
      ></Card>
      <Card
        card_image="./public/qr-logo.png"
        card_title="QR Code Generator"
        card_description="A QR Code generator for any link recived with a png format ready for use."
      ></Card>
      <Card
        card_image="./public/mct-logo.png"
        card_title="Morse Code Translator"
        card_description="Morse Code to ASCII code translator built with python."
      ></Card>
      <Card
        card_image="./public/flowmade-logo.png"
        card_title="Flow Made"
        card_description="A website for drawing stunning flow charts and diagrams built using JavaScript."
      ></Card>
    </div>
  );
}

export default ProjectSection;
