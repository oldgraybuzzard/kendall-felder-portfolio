import React from "react";

function Card({currentProjects}) {
  const {name, category, description, link} = currentProjects;
      return (
      <div className="card" style={{backgroundColor: "#242423", width: '18rem'}}>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-subtitle mb-2 text-muted">{category}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="card-link">Link to Project</a>
        </div>
      </div>
    );
  }

export default Card;