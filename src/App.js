import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import { Navbar, Coding_buddy, About, Me, Contribute } from './components'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Coding_buddy />
      <About />
      <Me />
      <Contribute />
    </div>
  );
}

export default App;
