import "../styles/button_styles.css";

interface ButtonProps {
  button_color: "button_dblue" | "button_black" | "button_white"|"light-button";
  children: string;
}

function Button({ button_color, children = "Button" }: ButtonProps) {
  return <button className={button_color="light-button " + button_color}>{children}</button>;
}

export default Button;
