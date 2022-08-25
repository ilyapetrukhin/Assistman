import { Col } from "antd";
import "./style.scss";

export const Problems = ({ text, src, ...props }) => {
  return (
    <Col {...props}>
      <div className="d-flex-center-col  h-100 problem">
        <img src={src} />
        <p>{text}</p>
      </div>
    </Col>
  );
};
