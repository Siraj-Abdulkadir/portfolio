import "../styles/gcard.css";
import Telegram_Icon from "../assets/icons/tg-logo.png";

interface GCardProps{
  image_src:string;
  image_description:string;
}

function GCard({image_src,image_description}:GCardProps) {
  return (
    <>
      <div className="main-g-container">
        <div className="g-container">
          <img src={image_src} alt={image_description} />
        </div>
        <a
            target="_blank"
            href="https://t.me/SirajAbdulkadirPortfolio"
            className="g-social-media-links"
          >
            <img width={"50px"} src={Telegram_Icon} alt="telegram-icon" />
          </a>
      </div>
    </>
  );
}

export default GCard;
