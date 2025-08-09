import "../styles/index.css";

interface Props {
  header_message: string;
  header_style: string;
  header_id?:string;
  
}

function HeaderText({ header_message, header_style ,header_id}: Props) {
  return <h1 id={header_id} className={header_style}>{header_message}</h1>;
}

export default HeaderText;
