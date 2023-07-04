import { CSSProperties, ChangeEvent, MouseEvent, ReactNode } from "react";

export type Person = {
  first_name: string;
  last_name: string;
};

export type PersonProps = {
  fullName: Person;
};

// export type PersonListProps = {
//   persons: Array<string>;
// };

export type PersonListProps = {
  persons: Person[]; // array of Person = {first_name: string; last_name: string}
};

export type StatusProps = {
  //   status: string; this could accept any string which might not be handled in the switch case
  status: "loading" | "error" | "success";
};

export type HeadingProps = {
  children: string;
};

export type OscarProps = {
  children: ReactNode;
};

export type ButtonProps = {
  //it takes a function (handleclick) as a props and handleclick does not have any arguments and return nothing
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
};

export type InputProps = {
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type ContainerProps = {
  style: CSSProperties;
};

export type UserProps = {
  name: string;
  email: string;
};

export type Address = {
  limit: number;
};
