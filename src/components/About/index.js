import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import coverImage from "../../assets/head-shot/018.jpg"



const About = () => {
  return (
  <section className="row justify-content-start">
    <div className="col-6">
    <h1>Hello</h1>
    <img src={coverImage} className="my-2" style={{ width: "75%" }} alt="Kendall Felder" />
    </div>
    <div className="col-6">
      kdfjlajdfklajldkfjlajdklfjaldjflajdfljaldjflajdfljaldfjl
    </div>
  </section>
  );

}

export default About;