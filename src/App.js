import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';


// import indiviual pages here
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{backgroundColor: "#33658A"}}>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactMe></ContactMe>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
