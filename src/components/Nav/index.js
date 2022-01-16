import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid='link' href='/'>
          <span role='img' aria-label='initials'> 🚍 </span>
          <p1  >Kendall D. Felder</p1>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected
            (false)}>
              About Me
            </a>
          </li>
         
          <li className="mx-2">
            <a data-testid="Portfolio" href="portfolio" onClick={() => setContactSelected
            (false)}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Resume" href="resume" onClick={() => setContactSelected 
            (false)}>
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Contact" href="#contact" onClick={() => setContactSelected
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