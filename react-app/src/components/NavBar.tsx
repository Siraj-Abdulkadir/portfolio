import "../styles/index.css";
import Button from "./Button";
import Link from "./Link";

function NavBar() {
  return (
    <>
      <nav>
        <Link
          link_target="#"
          link_color="whiteHeader"
          link_text="SIRAJ ABDULKADIR"
        ></Link>
        <Link link_target="#" link_color="white" link_text="Projects"></Link>
        <Link link_target="#" link_color="white" link_text="Skills"></Link>
        <Link link_target="#" link_color="white" link_text="About me"></Link>
        <Button button_color="button_dblue" button_text="Contact Me"></Button>
      </nav>
    </>
  );
}

export default NavBar;
