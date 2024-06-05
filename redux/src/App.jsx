import { useState } from "react";
import Addtodo from "./components/Addtodo";
import Todo_work from "./components/Todo_work";

function App() {
  return <div className="bg-gray-500 h-screen">
  <Addtodo/>
  <Todo_work/>
  </div>;
}

export default App;
