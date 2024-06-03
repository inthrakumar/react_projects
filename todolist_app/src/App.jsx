import { useEffect, useState } from "react";
import { Todoprovider } from "./content/todocontext";
import Todo_form from "./components/Todo_form";
import Todo_items from "./components/Todo_items";
function App() {
  const [todos,settodos]=useState([]);
  const addtodo=(todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo},...prev]);
  
  }
  const updatetodo=(id,todo)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===todo.id ?todo:prevTodo)))
  }

  const deletetodo=(id)=>{
    settodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }

  
  const toggletodo=(id)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo)))
  }


  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      settodos(todos);
    }
  },[])
  
  
  useEffect(()=>{

    localStorage.setItem("todos", JSON.stringify(todos));
  
  },[todos])
  
  return (
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,toggletodo}}>
         <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo List App</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todo_form />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todo_items todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>

    
    </Todoprovider>
  );
}

export default App;
