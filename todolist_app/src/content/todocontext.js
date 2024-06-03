import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [{
        id: 1,
        content: "todo work1",
        completed: false
    }],
    addtodo: (todo) => { },
    updatetodo: (id, todo) => { },
    deletetodo: (id) => { },
    toggletodo: (id) => { }

})


export const useTodo = () => { return useContext(todoContext) }


export const Todoprovider=todoContext.Provider;