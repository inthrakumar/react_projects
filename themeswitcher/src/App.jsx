import { useState,useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";



function App() {
  const [theme, setThemeMode] = useState("light");
  
  const darktheme = () => {
    setThemeMode('dark')
  }

  const lighttheme = () => {
    setThemeMode('light')
  }
   useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light");
    document.querySelector('html').classList.add(theme);
   
   },[theme])
  return ( 
  <ThemeProvider value={{theme, darktheme, lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>
              
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App;
