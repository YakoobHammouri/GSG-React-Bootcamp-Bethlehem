import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import NavBar from './components/navBar';

// TODO step 6 : create AboutPage in page folder to using in route
// TODO step 7 : define Routes , for home page  , about page , product with :id
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
