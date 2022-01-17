import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Pdf from "../../assets/pdf/Kendall Felder Resume.pdf";

function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    return (
        <section style={{backgroundColor: '#003049'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />
                        <h3>Front-end Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                        <h3>Back-end Proficiencies</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>MERN Stack</li>
                        </ul>
                        <h3>Additional Assets</h3>
                        <ul>
                            <li>Certified Project Manager</li>
                            <ul>
                              <li>Traditional</li>
                              <li>Agile</li>
                            </ul>

                        </ul>
                        <p className="text-center">
                            Download my <a href={Pdf} className="text-faded white-link" download>Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;