//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import SingleMovie from "./components/SingleMovie"

function App() {
  return (

    <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/singlemovie/:id" element={<SingleMovie/>} />
      </Routes>

  );
}

export default App;
