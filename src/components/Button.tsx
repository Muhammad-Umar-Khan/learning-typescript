import { ButtonProps } from "../const/types";

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>click</button>;
};

export default Button;
