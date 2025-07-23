import "../styles/card.css";
import Button from "./Button";

interface Props {
  card_image: string;
  card_title: string;
  card_description: string;
}

function Card({ card_image, card_title, card_description }: Props) {
  return (
    <div className="outer-div">
      <div className="child-div first-div">
        <img className="card-image" src={card_image} alt="card-image" />
      </div>
      <div className="child-div second-div">
        <h3 className="card-title">{card_title}</h3>
      </div>
      <div className="child-div third-div">
        <p className="card-description">{card_description}</p>
      </div>
      <div className="child-div fourth-div">
        <div className="buttom-div left-buttom-div">
          <div className="most-inner-div left-inner">
            <a className="social-media-links-card like-button" href="#">
              <img
                src="./public/like-button2.png"
                alt="like-icon"
              />
            </a>
          </div>
          <div className="most-inner-div right-inner">
            <a
              target="_blank"
              href="https://github.com/Siraj-Abdulkadir"
              className="social-media-links-card"
            >
              <img
                width="50px"
                src="./public/github-mark-white.svg"
                alt="github-icon"
              />
            </a>
          </div>
        </div>
        <div className="buttom-div right-buttom-div">
          <Button button_text="Learn More"></Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
