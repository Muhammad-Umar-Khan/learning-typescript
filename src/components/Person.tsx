import { PersonProps } from "../const/types";

const Person = ({ fullName: { first_name, last_name } }: PersonProps) => {
  // const Person = ({ fullName }: PersonProps) => {
  // const Person = (props: PersonProps) => {
  return (
    <h1>
      Hello {first_name} {last_name}
    </h1>
  );
};

export default Person;
