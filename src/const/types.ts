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
