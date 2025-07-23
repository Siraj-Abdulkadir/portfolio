import "../styles/index.css";
import Tabs from "./Tabs";
function ExperienceSection() {
  return (
    <div className="projects-section">
      <Tabs
        tab_header="Dawa Design"
        tab_year="2022-2024"
        tab_description="Served as grapahics designer for a fashion brand based in Addis Abeba for more than 2 years. Specializing in Adobe photoshop and Illustrator on which i gained emmense experience. "
      ></Tabs>
      <Tabs
        tab_header="Cnergy Technology"
        tab_year="2024-2025"
        tab_description="Produced events from conception through to completion. providing outstanding customer service and organizing memorable events that meet quality expectations. "
      ></Tabs>
      <Tabs
        tab_header="Self employed"
        tab_year="2024-Present"
        tab_description="I'm currently working as a freelancer on upwork, fiverr, behance and other platforms."
      ></Tabs>
    </div>
  );
}

export default ExperienceSection;
