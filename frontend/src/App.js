import { useState } from "react";
import InputTodo from "./components/InputTodo";
function App() {
  const [description, setDescription] = useState("");
  return (
    <>
      <InputTodo />
    </>
  );
}

export default App;
