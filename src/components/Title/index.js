import cn from "classnames";
import "./style.scss";

export const Title = ({ text, className = "", ...props }) => {
  return (
    <h3 className={cn("subtitle", className)} {...props}>
      {text}
    </h3>
  );
};
