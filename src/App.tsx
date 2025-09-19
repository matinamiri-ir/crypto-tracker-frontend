import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import "./styles/fonts.css";
import React from "react";
import { ThemeProvider } from "./utils/Context/ThemeProvider";
import { CoinsProvider } from "./utils/Context/getAllCoinProvider";


function App() {
  
 
  return (
    <BrowserRouter>
      <CoinsProvider>
        <ThemeProvider>

            <Routes />
          
        </ThemeProvider>
      </CoinsProvider>
    </BrowserRouter>
  );
}

export default App;
