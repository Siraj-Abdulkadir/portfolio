import "../styles/index.css";
import Button from "./Button";
import Link from "./Link";

function NavBar() {
  return (
    <>
      <nav>
        <img className="navbar-logo" src="./public/Logo.png" alt="" />
        <Link link_target="#" link_color="white" link_text="Projects"></Link>
        <Link link_target="#" link_color="white" link_text="Skills"></Link>
        <Link link_target="#" link_color="white" link_text="About me"></Link>
        <Button button_color="button_dblue" button_text="Contact Me"></Button>
      </nav>
    </>
  );
}

export default NavBar;
