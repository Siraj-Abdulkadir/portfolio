import NavBar from "./NavBar";
import HeaderText from "./HeaderText";

const description =
  "Highly motivated, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented with. Eager to contribute to team success through hard work,attention to detail and excellent organizational skills.";

function HeroSection() {
  return (
    <section className="herosection">
      <section className="inside-hero-container">
       <NavBar />
      <HeaderText
        header_id="hero-title"
        header_style="mainheadertext"
        header_message="Bringing your ideas to life"
      ></HeaderText>
      <HeaderText
        header_style="content_text"
        header_message={description}
      ></HeaderText>
      </section>
    </section>
  );
}

export default HeroSection;
