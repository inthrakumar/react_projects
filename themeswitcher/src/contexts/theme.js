import { createContext,useContext } from "react";
export const themecontext=createContext({
    theme:"light",
    darktheme:()=>{},
    lighttheme:()=>{}
});

export const ThemeProvider=themecontext.Provider;
export default function useTheme(){
    return useContext(themecontext);
}