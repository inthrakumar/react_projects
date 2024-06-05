import React from 'react'
import { useState,useEffect } from 'react'
import { useTodo } from '../content/todocontext'

function Todo_items({todo}) {
    const [isTodoEditable,setTodoEditable]=useState(false);
    const [todoMessage,setmsg]=useState(todo.todo);
    
    
    const {deletetodo,updatetodo,toggletodo}=useTodo();
    const edittodo=()=>{
        updatetodo(todo.id,{...todo,todo:todoMessage});
        setTodoEditable(false);
        
    }
    const toggleTodo=()=>{
        toggletodo(todo.id);
    }
  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
        <input type="checkbox" 
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleTodo}
        />
        <input type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMessage}
        onChange={(e) => setmsg(e.target.value)}
        readOnly={!isTodoEditable}
        />
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) {
                edittodo()
            }else setTodoEditable((prev) => !prev)
        }}
        disabled={todo.completed}
        >{isTodoEditable ? "📁": "✏️"}</button>
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deletetodo(todo.id)}
        >❌</button>
    </div>
  )
}

export default Todo_items
