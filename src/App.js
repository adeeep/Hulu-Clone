import Header from "./Comps/Header";
import Nav from "./Comps/Nav";
import "./Comps/App.css";
import Results from "./Comps/Results";
import { useState } from "react";
import requests from "./Comps/requests";


function App() {
  const[selected,seSelected]=useState(requests.fetchTrending)
  return (
    <div className="app">
           
   <h1>
     <Header />
     <Nav seSelected={seSelected} />
     <Results selected={selected}/>
  
   </h1>
    </div>
  );
}

export default App;
