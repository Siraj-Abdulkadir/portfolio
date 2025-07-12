import Button from "./Button";

interface Props {
  alert_color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";
  alert_message: string;
}

function AlertMessage({ alert_color = "info", alert_message }: Props) {
  return (
    <div
      className={"alert alert-" + alert_color + " alert-dismissible fade show"}
      role="alert"
    >
      {alert_message}
      <Button
        Button_Text=""
        choosen_color="close"
        data_bs_dismiss="alert"
        aria_label="Close"
        onClick={() => (alert_color = "danger")}
      ></Button>
    </div>
  );
}

export default AlertMessage;
