import React from 'react';
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './pages/nav'
import './styles.css'
function App() {
  return (
    <Router>
      <div className="App">

        <Nav />
        <h1>welcome</h1>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
