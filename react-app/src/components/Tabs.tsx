import "../styles/Tabs.css";

interface Props {
  tab_header: string;
  tab_year: string;
  tab_description: string;
}

function Tabs({ tab_header, tab_year, tab_description }: Props) {
  return (
    <div className="container-div">
      <div className="inner-div top-inner-div">
        <div className="inner-top right">
          <h3>{tab_header}</h3>
        </div>
        <div className="inner-top left">
          <h3>{tab_year}</h3>
        </div>
      </div>
          < hr className="inner-div" />
      <div className="inner-div buttom-inner-div">
        <p className="tap-description">{tab_description}</p>
      </div>
    </div>
  );
}

export default Tabs;
