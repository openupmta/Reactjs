import React from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import RouterUrl from './Router/RouterUrl';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Header />
        <RouterUrl />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
