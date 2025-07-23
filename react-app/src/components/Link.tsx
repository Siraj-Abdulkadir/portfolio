import "../styles/index.css";

interface Props {
  link_color?: "white" | "black" | "whiteHeader";
  link_text: string;
  link_target: string;
}

function Link({ link_color, link_text, link_target }: Props) {
  return (
    <a className={link_color} href={link_target}>
      {link_text}
    </a>
  );
}

export default Link;
