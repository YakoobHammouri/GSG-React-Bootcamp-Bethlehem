import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import NavBar from './components/navBar';
import About from './page/about';
import ProductDetailsPage from './page/productDetails';
import LoginPage from './page/Login';
import ProfilePage from './page/Profile';
import ProtectRouter from './components/protectRotuer';
import AuthContextProvider from './context/Auth/AuthContextProvider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <AuthContextProvider>
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
            path="/login"
            element={
              <div>
                <NavBar />
                <LoginPage />
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

          <Route
            path="/profile"
            element={
              <div>
                <NavBar />
                <ProtectRouter>
                  <ProfilePage />
                </ProtectRouter>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

/*


*/

export default App;
