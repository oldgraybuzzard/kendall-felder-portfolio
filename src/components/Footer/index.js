import React from "react";
import linkedin from '../../assets/icons/linkedin logo_icon.png';
import github from '../../assets/icons/github_logo_icon.png';

function Footer() {

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-9 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0">KDF</a>
        <p></p>
          <span>&copy; 2022. Created with ❤️ and ✊ for all by 
            <a target='blank' href="https://github.com/oldgraybuzzard">OldGrayBuzzard!</a>
          </span>
          
      </div>
      <ul className="nav col-md-3 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a target='blank' href="https://www.linkedin.com/in/kendallfelder/">
            <span>
              <img src={linkedin} style={{ width: "50%" }} alt='Linkedin Icon'/>
            </span>
          </a>
        </li>
        <li className="ms-3">
          <a target='blank' href="https://github.com/oldgraybuzzard">
            <span>
              <img src={github} style={{ width: "50%" }} alt='GitHub Icon'/>
            </span>
          </a>
        </li>
 
    </ul>
     

    </footer>
  )
}

export default Footer;
