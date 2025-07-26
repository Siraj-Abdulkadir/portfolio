import "../styles/gcard.css";
import EIDM_PHOTO from "../assets/images/EidMubarak.png";
import Button from "./Button";
function GCard() {
  return (
    <>
      <div className="main-g-container">
        <div className="second-g-containers top-g-second">
          <img src={EIDM_PHOTO} alt="Eid Mubarak Image" />
        </div>
        <div className="second-g-containers buttom-g-second">
          <div className="description-g-container">
            <p>
              Celebrated the joy of Eid Mubarak with Dawa Design! I've crafted a vibrant and heartfelt social media post design that beautifully captures the spirit of this special day.My design for Dawa Design focuses on warm colors, elegant typography, and symbolic imagery to evoke feelings of peace, togetherness, and prosperity. It's more than just a greeting; it's a visual embrace, connecting Dawa Design with its audience through the shared celebration of Eid. I aimed to create something truly memorable that resonates with the festive atmosphere and leaves a lasting positive impression.
            </p>
          </div>
          <div className="button-g-container">
            <Button button_text="View File(PSD)"></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GCard;
