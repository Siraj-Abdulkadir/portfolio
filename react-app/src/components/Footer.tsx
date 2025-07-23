import "../styles/footer.css";
import Button from "./Button";
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
              <img
                width={"50px"}
                src="./public/icons/email-logo.png"
                alt="email-icon"
              />
              <br />
              Email
            </a>
          </div>
          <div className="social-media-div social-media-link2">
            <a
              target="_blank"
              href="https://t.me/srj_ak1"
              className="social-media-links"
            >
              <img
                width={"50px"}
                src="./public/icons/tg-logo.png"
                alt="telegram-icon"
              />
              <br /> Telegram
            </a>
          </div>
          <div className="social-media-div social-media-link3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/siraj-abdulkadir-5266121b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="social-media-links"
            >
              <img
                width="50px"
                src="./public/icons/linkedIn-icon.webp"
                alt="linkedIn-icon"
              />
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
              <img
                width="50px"
                src="./public/icons/github-logo.png"
                alt="github-icon"
              />
              <br />
              Github
            </a>
          </div>
          <div className="social-media-div social-media-link5">
            <a
              target="_blank"
              href="https://siraj-abdulkadir.github.io/portfolio/"
              className="social-media-links"
            >
              <img
                width="50px"
                src="./public/icons/website-icon.png"
                alt="website-icon"
              />
              <br />
              Website
            </a>
          </div>
          <div className="social-media-div social-media-link6">
            <a href="tel:+251976034554" className="social-media-links">
              <img
                width="50px"
                src="./public/icons/Phone_icon.png"
                alt="ohone-icon"
              />
              <br />
              Phone
            </a>
          </div>
        </div>
        <div className="contact-me-div">
          <Button button_color="button_dblue" button_text="Contact Me"></Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
