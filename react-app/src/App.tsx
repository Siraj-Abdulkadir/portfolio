import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import AlertMessage from "./components/Alert";
import { useState } from "react";

function App() {
  const [isAlertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {isAlertVisible && (
        <AlertMessage
          alert_color="warning"
          alert_message="A new warning"
        ></AlertMessage>
      )}
      <div>
        <ListGroup></ListGroup>{" "}
      </div>
      <Button
        Button_Text="This Button"
        onClick={() => setAlertVisibility(true)}
      ></Button>
      <Button
        choosen_color="secondary"
        Button_Text="Another Button"
        onClick={() => setAlertVisibility(true)}
      ></Button>
    </>
  );
}

export default App;
