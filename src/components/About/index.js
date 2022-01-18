import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import headShot from '../../assets/head-shot/018.jpg';



const About = () => {
  const [pages] = useState([
    {
        name: "about me"
    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="col">
                    <img src={headShot} style={{ width: "15%", borderRadius: '100px' }} alt="kendall felder"></img>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                            <hr />
                            <p className="text-faded mb-5">Hello, thanks for visiting. Now that you are here, let me give you a very brief overview of my background.</p> 
                            <p className="text-faded mb-5">I am an entrepreneur, certified project manager with agile experience as well as a detailed full stack web developer. I recently earned a Certificate in Full Stack Web Development from the University of Central Florida, where I developed news skills and refined old ones in HTML, Javascript, MERN Stack and SQL Server to list a few.</p>
                        
                            <p className="text-faded mb-5">My strong organizational skills and excellent problem-solving abilities allow me to effectively collaborate on cross-functional teams that include designers, software developers, scrum masters, and project managers. My advanced education, professional background in technology, drive for success, and strong attention to detail are great assets that I possess.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;