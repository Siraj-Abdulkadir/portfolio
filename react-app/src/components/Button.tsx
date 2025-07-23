import "../styles/button_styles.css";

interface Props {
  button_color?: "button_dblue" | "button_black" | "button_white";
  button_text: string;
}

function Button({ button_color, button_text = "Button" }: Props) {
  return (
    <>
      <button className={button_color}>{button_text}</button>
    </>
  );
}

export default Button;
