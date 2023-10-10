import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cocktails from "./pages/Cocktails/Cocktails";
import Meals from "./pages/Meals/Meals";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/meals" element={<Meals/>} />
          <Route path="/cocktails" element={<Cocktails/>} />
        </Routes>
    </Router>
  );
}

export default App;
