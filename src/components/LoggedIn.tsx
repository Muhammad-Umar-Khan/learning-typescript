import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <div>
      <h1>User is {isLoggedIn ? "logged In" : "logged out"}</h1>
      <button onClick={handleToggle}>toggle</button>
    </div>
  );
};

export default LoggedIn;
