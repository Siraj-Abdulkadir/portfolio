import HeaderText from "./components/HeaderText";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Card from "./components/card";

function App() {
  return (
    <>
      <HeroSection />
      <div>
        <HeaderText
          header_style="section-headers"
          header_message="Projects"
        ></HeaderText>
        <ProjectSection>
        </ProjectSection>
      </div>
    </>
  );
}

export default App;
