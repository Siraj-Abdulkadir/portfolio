import "../styles/footer.css";
import Button from "./Button";
import Email_Icon from "../assets/icons/email-logo.png";
import Telegram_Icon from "../assets/icons/tg-logo.png";
import LinkedIn_icon from "../assets/icons/linkedIn-icon.webp";
import Github_icon from "../assets/icons/github-logo.png";
import Website_icon from "../assets/icons/website-icon.png";
import Phone_icon from "../assets/icons/Phone_icon.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="social-media">
          <div className="social-media-div social-media-link1">
            <a
              target="_blank"
              href="mailto:imsirajabdulkadir@gmail.com"
              className="social-media-links"
            >
              <img width={"50px"} src={Email_Icon} alt="email-icon" />
              <br />
              Email
            </a>
          </div>
          <div className="social-media-div social-media-link2">
            <a
              target="_blank"
              href="https://t.me/SirajAbdulkadir1"
              className="social-media-links"
            >
              <img width={"50px"} src={Telegram_Icon} alt="telegram-icon" />
              <br /> Telegram
            </a>
          </div>
          <div className="social-media-div social-media-link3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/siraj-abdulkadir-5266121b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="social-media-links"
            >
              <img width="50px" src={LinkedIn_icon} alt="linkedIn-icon" />
              <br />
              LinkedIn
            </a>
          </div>
          <div className="social-media-div social-media-link4">
            <a
              target="_blank"
              href="https://github.com/Siraj-Abdulkadir"
              className="social-media-links"
            >
              <img width="50px" src={Github_icon} alt="github-icon" />
              <br />
              Github
            </a>
          </div>
          <div className="social-media-div social-media-link5">
            <a
              target="_blank"
              href="https://portfolio-dg6u.onrender.com"
              className="social-media-links"
            >
              <img width="50px" src={Website_icon} alt="website-icon" />
              <br />
              Website
            </a>
          </div>
          <div className="social-media-div social-media-link6">
            <a href="tel:+251976034554" className="social-media-links">
              <img width="50px" src={Phone_icon} alt="ohone-icon" />
              <br />
              Phone
            </a>
          </div>
        </div>
        <div className="contact-me-div">
          <Button button_color="button_dblue">Contact Me</Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
