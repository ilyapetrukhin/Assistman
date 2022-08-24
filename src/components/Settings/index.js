import { Col } from "antd";
import "./style.scss";

export const Settings = ({ title, text, src, ...props }) => {
  return (
    <Col md={6} sm={12} xs={24}>
      <div {...props}>
        <h4>{title}</h4>
        <img src={src} />
        <p>{text}</p>
      </div>
    </Col>
  );
};
