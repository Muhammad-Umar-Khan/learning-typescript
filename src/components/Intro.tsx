// interface IntroProps {
//   user_name: string;
//   age: number;
// }

type IntroProps = {
  user_name: string;
  age: number;
};

// export const Intro = ({ user_name, age }: IntroProps) => {
export const Intro = (props: IntroProps) => {
  return (
    <div>
      <h1>
        Hello, my name is {props.user_name} and i am {props.age} years old
      </h1>
    </div>
  );
};
