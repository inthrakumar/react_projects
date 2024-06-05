import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[{id:1,todo_work:"Hello world"}]
}


export const todoslice=createSlice({
    name:'todo_work',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todos.push({id:nanoid(),todo_work:action.payload})
        },
        deletetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updatetodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id?action.payload:todo)
        }
    }
})


export const {addtodo,deletetodo,updatetodo}=todoslice.actions;

export default todoslice.reducer;
