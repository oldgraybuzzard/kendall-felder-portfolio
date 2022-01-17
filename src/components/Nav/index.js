import React from "react";



function Nav(props) {
  const {
    setContactSelected,
  } = props;

  return (
    <header className="navbar sticky-top navbar-light" style={{backgroundColor: '#33658A', color: '#00A7E1'}}>
      <h2>
        <a data-testid='link' href='/'>
          <span aria-label='initials'>KDF</span>
        </a>
      </h2>
      <h2 style={{fontWeight: 'bold'}}>Kendall D. Felder</h2>
      <nav style={{color: '#A33B20'}}>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected
            (false)}>
              About Me
            </a>
          </li>
         
          <li className="mx-2">
            <a data-testid="Portfolio" href="#portfolio" onClick={() => setContactSelected
            (false)}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Resume" href="#resume" onClick={() => setContactSelected 
            (false)}>
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Contact" href="#contactme" onClick={() => setContactSelected
            (false)}>
              Contact Me
            </a>
          </li>

        </ul>
      </nav>



    </header>
  )
}

export default Nav;