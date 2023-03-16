import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import NavBar from './components/navBar';
import About from './page/about';
import ProductDetailsPage from './page/productDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <NavBar />
              <Home />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <NavBar />
              <About />
            </div>
          }
        />
        <Route
          path="/product/:id"
          element={
            <div>
              <NavBar />
              <ProductDetailsPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

/*


*/

export default App;
