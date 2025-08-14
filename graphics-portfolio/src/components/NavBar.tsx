import "../styles/index.css";
import Button from "./Button";
import Link from "./Link";
import Main_Logo from "../assets/icons/Logo.png";

function NavBar() {
  return (
    <>
      <nav>
        <img className="navbar-logo" src={Main_Logo} alt="" />
        <Link
          link_target="#Projects-Section"
          link_color="white"
          link_text="Projects"
        ></Link>
        <Link
          link_target="#Experience-Section"
          link_color="white"
          link_text="Experience"
        ></Link>
        <Link
          link_target="#About-Me-Section"
          link_color="white"
          link_text="About me"
        ></Link>
        <Button button_color="button_white">Contact Me</Button>
      </nav>
    </>
  );
}

export default NavBar;
