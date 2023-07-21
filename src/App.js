import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import { Navbar, Coding_buddy, About, Me, Contribute, Footer } from './components'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Coding_buddy />
      <About />
      <Me />
      <Contribute />
      <Footer />
    </div>
  );
}

export default App;
