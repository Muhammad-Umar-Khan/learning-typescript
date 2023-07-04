import { useState } from "react";
import { Address, UserProps } from "../const/types";

const User = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Umar",
      email: "umar@gmail.com",
    });
  };
  //   let names: string[] = [];
  //   let names: Array<string> = [];

  return (
    <div>
      <p>
        Hello, {user?.name} {user?.email}
      </p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default User;
