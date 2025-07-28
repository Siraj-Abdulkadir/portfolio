import "../styles/AboutMe.css";
import Button from "./Button";
import HeaderText from "./HeaderText";
import myImage from "../assets/images/image1.png";

function AboutMeSection() {
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-div top-div">
          <div className="left-container">
            <img className="card-image" src={myImage} alt="photographs" />
          </div>
          <div className="right-container">
            <HeaderText
              header_message="Expertise"
              header_style="inside-headers"
            ></HeaderText>
            <hr />
            <div className="button-container">
              <Button
                button_color="button_white"
              >Graphics Design</Button>
              <Button
                button_color="button_white"
              >Web Development</Button>
              <Button
                button_color="button_white"
              >UI & UX Design</Button>
              <Button
                button_color="button_white"
              >Social Media Management</Button>
              <Button
                button_color="button_white"
              >Videography</Button>
              <Button
                button_color="button_white"
              >Photography</Button>
              <Button
                button_color="button_white"
              >Conten Creation</Button>
            </div>
          </div>
        </div>
        <div className="about-me-div ab-buttom-div">
          <HeaderText
            header_message="My Background"
            header_style="ab-headers"
          ></HeaderText>
          <hr />
          <p className="ab-description">
            My name is Siraj Abdulkadir. I'm Highly motivated, ambitious person
            who has developed a mature and responsible approach to any task that
            I undertake, or situation that I am presented with. Eager to
            contribute to team success through hard work,attention to detail and
            excellent organizational skills.I was Born in West Wellega, Ethiopia
            completed my primary school there.Growing up I adored art, filling
            my sketchbook with vibrant colors. Inspired by local murals, and
            always dreamed of creating masterpieces. then i moved to Addis Ababa
            where i completed my high school and university. I currently live in
            Addis Ababa Inspired by city lights, I am creating graphic designs
            that fuse technology, culture, and beauty, blending modern
            innovation with rich traditions to inspire and connect.I am Highly
            motivated, ambitious person who has developed a mature and
            responsible approach to any task that I undertake, or situation that
            I am presented with. Eager to contribute to team success through
            hard work, attention to detail and excellent organizational skills.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMeSection;
