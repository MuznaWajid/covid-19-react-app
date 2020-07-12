import React,{useState} from 'react';
import "./App.css"
import NavBar from "./NavBar";
import InfoPanel from "./InformationPanel";
import FootNav from "./FootNav"
import Graph from "./Graph";


function App() {
  const Screenconfig = useState(0);

  return (
    <div className="center">
<h1>Paitent Tracker App By using React</h1>
    <NavBar />

    <InfoPanel currentscreen = {Screenconfig[0]} />

    <FootNav  Screenconfig = {Screenconfig}  />
    <Graph />
    </div>
  );
}
export default App;