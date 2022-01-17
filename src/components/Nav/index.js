import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';



function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
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
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact Me</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
              }`}
              key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;