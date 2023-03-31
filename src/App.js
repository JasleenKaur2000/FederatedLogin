import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signin";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
