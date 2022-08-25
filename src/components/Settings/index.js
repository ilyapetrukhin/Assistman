import { Col } from "antd";
import "./style.scss";

export const Settings = ({ title, text, src, ...props }) => {
  return (
    <Col md={6} sm={12} xs={24} className="">
      <div {...props} className="bg-w h-100 settings">
        <div className="setting-title">{title}</div>
        <img src={src} />
        <p>{text}</p>
      </div>
    </Col>
  );
};
