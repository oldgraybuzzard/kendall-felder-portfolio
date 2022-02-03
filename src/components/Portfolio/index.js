import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
      {
        name: 'versa-train',
        repo: 'https://github.com/oldgraybuzzard/crispy-giggle.git',
        description: 'This training application is intended to serve as a full-stack Mern-stack application. The stack is made of MongoDB, Express, React, Redux, graphql and apollo.',
        link: 'https://crispy-gigglers.herokuapp.com/'
      },
      {
      name: 'airstream-rivet-life-blog',
      repo: 'https://github.com/oldgraybuzzard/aluminum_rivet_life.git',
      description: 'This is a CMS styled blogging site for owners of Airstream lovers. Users are able to view posts without logging into the site. However, in order to respond to posts or add a post of your own, you must log in first.',
      link: 'https://arcane-earth-71904.herokuapp.com/'
    },
    {
      name: 'note-taker',
      repo: 'https://github.com/oldgraybuzzard/note-taker.git',
      description: 'A simple note taking application which allows you to save notes with a title and plain text. This application is powered by Express, theis note Taker app makes creating, viewing, and deleting notes simple and easy!',
      link: 'https://stark-crag-48739.herokuapp.com/'
    },
    {
      name: 'weather-dashboard',
      description: 'A weather dashboard that allows a user to search for the current weather and future weather by city name.',
      link: 'https://oldgraybuzzard.github.io/weather-dashboard/',
      repo: 'https://github.com/oldgraybuzzard/weather-dashboard.git'
    },
    {
      name: 'work-scheduler-app',
      repo: 'https://github.com/oldgraybuzzard/work-scheduler.git',
      description: 'Simple calendar application that allows a user to save events for each hour of the day',
        link: 'https://oldgraybuzzard.github.io/work-scheduler/'
    },
    {
      name: 'turbo-quiz',
      repo: 'https://github.com/oldgraybuzzard/turbo-quiz.git',
      description: 'A speed quiz to check your JavaScript knowledge.',
      link: 'https://github.com/oldgraybuzzard/turbo-quiz.git'
    },
    {
      name: 'markdown-readme-generator',
      repo: 'https://github.com/oldgraybuzzard/readme-generator.git',
      description: 'This is a Node based tool where users can create a Markdown README file for their projects and respositories.',
      link: 'https://watch.screencastify.com/v/MkbdcQAWwMgWVxAnygfp'
    },
    {
      name: 'team-profile-generator',
      repo: 'https://github.com/oldgraybuzzard/team-profile-generator.git',
      description: 'This application was created to generate a team profile based on user input using the Inquirer module from Node.js and displaying the information on a newly created html page with a style sheet. This project demonstrates use of OOP and TDD using Jest.',
      link: 'https://watch.screencastify.com/v/k2UbScdMkLl6fo4XIeQC'

    },
    {
      name: 'employee-management',
      repo: 'https://github.com/oldgraybuzzard/employee_managment.git',
      description: 'This application was created to build a Content Management System to track employees. This project demonstrates use of node, inquirer, console.table and MySQL.',
      link: 'https://watch.screencastify.com/v/RukQ8MVZzfYScCmTaEF4'
    },
    {
      name: 'opus-robur',
      repo: 'https://github.com/oldgraybuzzard/opus-robur.git',
      description: 'This is a HR management platform geared toward small business owners. It will allow small business oweners to import employees via Google sheets or by uploading the employee information via a CSV file.',
      link: 'https://rocky-depths-18609.herokuapp.com/'
    },
    {
      name: 'ecommerce-backend-project',
      repo: 'https://github.com/oldgraybuzzard/crispy-potato.git',
      description: 'This project sets up the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries. The SQL database includes tables for products, categories, tags, and product tags. API routes are used to make requests and updates from the database which are joined through Sequelize queries.',
      link: 'https://watch.screencastify.com/v/ZRB9TOoILCErkNfgeA8j'
    },
    {
      name: 'budget-tracking-web-application',
      repo: 'https://github.com/oldgraybuzzard/super-carnival.git',
      description: 'This Budget Tracker application allows users to add expenses and deposits to their budget with or without a connection. Regardless of the users online connection, they will be able to use this app.',
      link: 'https://stormy-bayou-15795.herokuapp.com/'
    },
    {
      name: 'rivet-connector',
      repo: 'https://github.com/oldgraybuzzard/rivet-connector.git',
      description: 'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express, Node, MongoDB and Mongoose to allow users, thoughts, friend lists and thought reactions to be created, updated and deleted.',
      link: 'https://watch.screencastify.com/v/ap1KOoP9w8QSbZxj9eay'
    },
   
  ]);
  
  return (
    <section className="p-0">
        <div className="container-fluid p-0">
            <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
            <hr className="my-4" />
            <div className="row no-gutters popup-gallery">
               {projects.map((project, idx) => (
                  <Project
                    project={project}
                        key={"project" + idx}
                  />
               ))}
            </div>
        </div>
    </section>
  );
};

export default Portfolio;