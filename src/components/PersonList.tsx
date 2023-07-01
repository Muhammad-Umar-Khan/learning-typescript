import { MouseEvent } from "react";
import { PersonListProps } from "../const/types";
import Button from "./Button";
import Input from "./Input";

export const PersonList = ({ persons }: PersonListProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>, id: number) =>
    console.log("Button clicked", event, id);
  return (
    <div>
      {persons.map((person, index) => (
        <p key={index}>
          {person.first_name} {person.last_name}
        </p>
      ))}
      <Button handleClick={handleClick} />
      <Input value="" setValue={(event) => console.log(event.target.value)} />
      {/* you dont need to pass the ecent and
      id here, because it is a rference to above function */}
    </div>
  );
};
