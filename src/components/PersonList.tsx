import { PersonListProps } from "../const/types";

export const PersonList = ({ persons }: PersonListProps) => {
  return (
    <div>
      {persons.map((person) => (
        <p>
          {person.first_name} {person.last_name}
        </p>
      ))}
    </div>
  );
};
