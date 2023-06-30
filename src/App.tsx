import "./App.css";
import { Intro } from "./components/Intro";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const fullName = {
    first_name: "Umar",
    last_name: "Khan",
  };
  return (
    <div className="App">
      <Intro user_name="Umar" age={10} />
      <Person fullName={fullName} />
      <PersonList
        persons={[
          { first_name: "Umar", last_name: "Khan" },
          { first_name: "Alex", last_name: "Mahone" },
        ]}
      />
    </div>
  );
}

export default App;
