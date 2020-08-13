import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import TopMenu from './Components/TopMenu';
import Products from './Pages/Products';
const Home = () => {
  return <h2>Home</h2>;
}


function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </div>
    </Router>
  );
}

export default App;
