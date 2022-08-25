import { Avatar } from "antd";
import "./style.scss";

export const Reviews = ({ title, text, src, ...props }) => {
  return (
    <div className="reviews" {...props}>
      <div className="reviews__block">
        <Avatar src={src} className="x" />
        {/* <img src={src} /> */}
        <p>{title}</p>
      </div>
      <p className="p-10">{text}</p>
    </div>
  );
};
