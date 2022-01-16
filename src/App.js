import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

// import indiviual pages here
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{backgroundColor: "#33658A"}}>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
