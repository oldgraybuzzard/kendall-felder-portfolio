import React, { useState } from 'react';
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
  const [categories] = useState([
    {
      name: 'projects',
    description: 'List of my web development projects'
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div style={{backgroundColor: "#33658A"}}>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            
          </>
        ) : (
            <ContactMe></ContactMe>
        )}
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
