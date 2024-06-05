import {configureStore} from '@reduxjs/toolkit'
import todoreducer from "../features/slice/todoSlice"
  export const store=configureStore({
    reducer:todoreducer
      

    
  });