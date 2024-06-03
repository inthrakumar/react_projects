import React from 'react'
import { useState } from 'react';
import { useTodo } from '../content/todocontext';

function Todo_form() {

    const [todo,setTodo]=useState("");
    const {addtodo}=useTodo();


    const add=(e)=>{
        e.preventDefault();
        if(!todo || todo===" ")return ;
        addtodo({todo,completed:false});
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={add} className='flex'>
        <input type="text" 
        placeholder='Enter the task'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >Add</button>
        </form>
      
    </div>
  )
}

export default Todo_form;
