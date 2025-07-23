import AboutMeSection from "./components/AboutMeSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeaderText from "./components/HeaderText";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

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
      <div>
        <HeaderText
          header_style="section-headers"
          header_message="Experiences"
        ></HeaderText>
        <ExperienceSection>
        </ExperienceSection>
      </div>
      <div>
        <HeaderText
          header_style="section-headers"
          header_message="About Me"
        ></HeaderText>
        <AboutMeSection>
        </AboutMeSection>
      </div>
      <div>
        <Footer>
        </Footer>
      </div>
    </>
  );
}

export default App;
