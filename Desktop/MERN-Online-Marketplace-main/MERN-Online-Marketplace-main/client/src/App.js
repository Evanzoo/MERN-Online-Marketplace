//App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { NavBar } from "./components/navbar";
import NewProductForm from './components/NewProductForm'; 
import ProductList from './components/ProductList';

function App() {
  return <div className="App">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/auth" element={< Auth />} />
        <Route path="/new-product" element={<NewProductForm />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  </div>
};

export default App;
