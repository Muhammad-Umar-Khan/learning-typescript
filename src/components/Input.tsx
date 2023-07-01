import { InputProps } from "../const/types";

const Input = ({ value, setValue }: InputProps) => {
  return <input value={value} onChange={(event) => setValue(event)} />;
};

export default Input;
