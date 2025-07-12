interface Props {
  Button_Text: string;
  choosen_color?: string;
  data_bs_dismiss?: "alert";
  aria_label?: "Close";
  onClick: () => void;
}

function Button({
  Button_Text,
  choosen_color = "primary",
  aria_label,
  data_bs_dismiss,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={"btn btn-" + choosen_color}
      aria-label={aria_label}
      data-bs-dismiss={data_bs_dismiss}
    >
      {Button_Text}
    </button>
  );
}

export default Button;
