import React from 'react';

function Footer() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/oldgraybuzzard"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/kendallfelder/"
        }
    ]

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                      <a href="/" className="mb-3 me-2 mb-md-0">KDF</a>
                        <span>&copy; 2022. Created with ❤️ and ✊ for all by
                          {' '}
                            <a target='blank' href="https://github.com/oldgraybuzzard">OldGrayBuzzard!</a>
                        </span>
                        {' '}
                          {icons.map(icon =>
                              (
                                  <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                              )
                          )}                         
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
