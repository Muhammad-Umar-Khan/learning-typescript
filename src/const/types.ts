import { ReactNode } from "react";

type Person = {
  first_name: string;
  last_name: string;
};

export type PersonProps = {
  fullName: {
    first_name: string;
    last_name: string;
  };
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
