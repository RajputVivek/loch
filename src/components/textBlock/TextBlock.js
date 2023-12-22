import "./textBlock.css";
import bell from "../../assets/images/bell.svg";
import eye from "../../assets/images/eye.svg";

const TextBlock = ({ heading, text, icon, className }) => (
  <div className={"text__block " + className}>
    <div>
      <img src={icon === "bell" ? bell : eye} height="24px" alt={icon} />
    </div>
    <h4>{heading}</h4>
    <p>{text}</p>
  </div>
);

export default TextBlock;