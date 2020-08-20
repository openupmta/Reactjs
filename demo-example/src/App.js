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
import Counter from './Pages/Counter';
import CartProvider from './Contexts/Cart';
const Home = () => {
  return <h2>Home</h2>;
}


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          {/* <Counter>
            {(count) => <h1>{count}</h1>}
          </Counter> */}
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
