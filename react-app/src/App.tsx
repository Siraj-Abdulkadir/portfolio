import Button from "./components/Button";
import Link from "./components/Link";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
    <HeroSection/>
      <div>
        <Link link_target="#" link_color="white" link_text="NEW LIInk"></Link>
        <Button  button_text=" New Buttons"></Button>
      </div>
    </>
  );
}

export default App;
