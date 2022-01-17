import React from "react";

function Portfolio () {
  return (
    <div className="border-top my-5">
       <h3 className="text-center">
        A Sampling of my Full Stack Web Development Projects
      </h3>
      <div className="container">
        <div className="row">
          <div className="card" style={{backgroundColor: "#401F3E", width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title"><u>Budget Tracker</u></h5>
              <p className="card-text">This Budget Tracker application allows users to add expenses and deposits to their budget with or without a connection.</p>
                <p><u>Technologies:</u></p>
                <p>Node.JS, NPM, express, mongoose, morgan, compression, web app manifest, indexed db</p>
              <a href="https://stormy-bayou-15795.herokuapp.com/">Heroku</a>
              <a href="https://github.com/oldgraybuzzard/super-carnival.git">GitHub</a>
            </div>
          </div>
          <div className="card" style={{backgroundColor: "#BF3100",width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"><u>eCommerce Backend</u></h5>
                <p className="card-text">This project sets up the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database.</p>
                <p><u>Technologies:</u></p>
                <p>Node, express, MySql2, Sequelize, Dotenv</p>
              <a href="https://stormy-bayou-15795.herokuapp.com/">Heroku</a>
                <a href="https://github.com/oldgraybuzzard/crispy-potato.git">GitHub</a>
            </div>
          </div>
          <div className="card" style={{backgroundColor: "#401F3E", width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title"><u>Opus Robur</u></h5>
              <p className="card-text">This is a HR management platform geared toward small business owners.</p>
              <p><u>Technologies:</u></p>
                <p>Node.JS, NPM, bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sequelize, session, googleapis, pdf-creator-node, jsontocsv, google-spreadsheet, csvtojson</p>
              <a href="https://stormy-bayou-15795.herokuapp.com/">Heroku</a>
              <a href="https://rocky-depths-18609.herokuapp.com/">Heroku</a>
              <a href="https://github.com/oldgraybuzzard/opus-robur.git">GitHub</a>
            </div>
          </div>
          <div className="card" style={{backgroundColor: "#BF3100",width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"><u>Airstream Rivet Life Blog</u></h5>
                <p className="card-text">This is a CMS styled blogging site for owners of Airstream travel trailers.Users are able to view posts without logging into the site.</p>
                <p><u>Technologies:</u></p>
                <p>Node.JS, NPM, bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sequelize, session</p>
              <a href="https://stormy-bayou-15795.herokuapp.com/">Heroku</a>
                <a href="https://arcane-earth-71904.herokuapp.com/">Heroku</a>
                <a href="https://github.com/oldgraybuzzard/aluminum_rivet_life.git">GitHub</a>
            </div>
          </div>
          <div className="card" style={{backgroundColor: "#401F3E", width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title"><u>Weather Dashboard</u></h5>
              <p className="card-text">A weather dashboard that allows a user to search for the current weather and future weather by city name.</p>
              <p><u>Technologies:</u></p>
                <p>Javascript, HTML, CSS</p>
              <a href="https://stormy-bayou-15795.herokuapp.com/">Heroku</a>
              <a href="https://oldgraybuzzard.github.io/weather-dashboard/">Web Link</a>
              <a href="https://github.com/oldgraybuzzard/weather-dashboard.git">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;