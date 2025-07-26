import "../styles/index.css";

interface Props {
  header_message: string;
  header_style: string;
}

function HeaderText({ header_message, header_style }: Props) {
  return <h1 className={header_style}>{header_message}</h1>;
}

export default HeaderText;
