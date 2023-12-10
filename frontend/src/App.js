// import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import { Navbar, Codingbuddy, About, Me, Contribute, Footer, Searchpage } from './components'
// import {Coders} from "./components/coder/CoderCards"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Codingbuddy />
      <About />
      <Searchpage />
      <Me />
      <Contribute />
      <Footer />
    </div>
  );
}

export default App;
