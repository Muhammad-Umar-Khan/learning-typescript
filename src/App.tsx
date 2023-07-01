import "./App.css";
import Button from "./components/Button";
import { Heading } from "./components/Heading";
import { Intro } from "./components/Intro";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";
import Status from "./components/Status";

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
      <Status status="loading" />
      <Heading>Heading</Heading>
      <Oscar>
        <Heading>oscar goes to leonardo decaprio!</Heading>
      </Oscar>
      {/* <Button /> */}
    </div>
  );
}

export default App;
