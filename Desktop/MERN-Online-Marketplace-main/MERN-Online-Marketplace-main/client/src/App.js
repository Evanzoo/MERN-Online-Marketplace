import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { NavBar } from "./components/navbar";
import { productForm } from './pages/productForm';

function App() {
  return <div className="App"> 
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/auth" element={< Auth />}/>
      <Route path="/products" element={< productForm />}/>
    </Routes>
  </Router>
  </div>
};

export default App;
