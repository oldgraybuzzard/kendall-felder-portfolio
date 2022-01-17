import React, { useState } from 'react';
import Card from '../Card';



const ProjectList = ({ category }) => {
  const [projects] = useState([
    {
      name: 'Weather Dashboard',
      category: 'Javascript',
      description: 'A weather dashboard that allows a user to search for the current weather and future weather by city name.',
      link: 'https://oldgraybuzzard.github.io/weather-dashboard/'
    },
    {
      name: 'Work Scheduler App',
      category: 'HTML',
      description: 'Simple calendar application that allows a user to save events for each hour of the day',
        link: 'https://oldgraybuzzard.github.io/work-scheduler/'
    },
    {
      name: 'Turbo Quiz',
      category: 'Javascript',
      description: 'A speed quiz to check your JavaScript knowledge.',
      link: 'https://github.com/oldgraybuzzard/turbo-quiz.git'
    },
    {
      name: 'Markdown README Generator',
      category: 'Javascript',
      description: 'This is a Node based tool where users can create a Markdown README file for their projects and respositories.',
      link: 'https://watch.screencastify.com/v/MkbdcQAWwMgWVxAnygfp'
    },
    {
      name: 'Note Taker',
      category: 'Javascript',
      description: 'A simple note taking application which allows you to save notes with a title and plain text. This application is powered by Express, theis note Taker app makes creating, viewing, and deleting notes simple and easy!',
      link: 'https://stark-crag-48739.herokuapp.com/'
    },
    {
      name: 'Team Profile Generator',
      category: 'Javascript',
      description: 'This application was created to generate a team profile based on user input using the Inquirer module from Node.js and displaying the information on a newly created html page with a style sheet. This project demonstrates use of OOP and TDD using Jest.',
      link: 'https://watch.screencastify.com/v/k2UbScdMkLl6fo4XIeQC'

    },
    {
      name: 'Employee Management',
      category: 'MySql',
      description: 'This application was created to build a Content Management System to track employees. This project demonstrates use of node, inquirer, console.table and MySQL.',
      link: 'https://watch.screencastify.com/v/RukQ8MVZzfYScCmTaEF4'
    },
    {
      name: 'Opus Robur',
      category: 'NPM',
      description: 'This is a HR management platform geared toward small business owners. It will allow small business oweners to import employees via Google sheets or by uploading the employee information via a CSV file.',
      link: 'https://rocky-depths-18609.herokuapp.com/'
    },
    {
      name: 'eCommerce Backend Project',
      category: 'MySql',
      description: 'This project sets up the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries. The SQL database includes tables for products, categories, tags, and product tags. API routes are used to make requests and updates from the database which are joined through Sequelize queries.',
      link: 'https://watch.screencastify.com/v/ZRB9TOoILCErkNfgeA8j'
    },
    {
      name: 'Budget Tracing Web Application',
      category: 'NPM',
      description: 'This Budget Tracker application allows users to add expenses and deposits to their budget with or without a connection. Regardless of the users online connection, they will be able to use this app.',
      link: 'https://stormy-bayou-15795.herokuapp.com/'
    },
    {
      name: 'Rivet Connector',
      category: 'MongoDB',
      description: 'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express, Node, MongoDB and Mongoose to allow users, thoughts, friend lists and thought reactions to be created, updated and deleted.',
      link: 'https://watch.screencastify.com/v/ap1KOoP9w8QSbZxj9eay'
    },
    {
      name: 'Airstream Rivet Life Blog',
      category: 'MySql',
      description: 'This is a CMS styled blogging site for owners of Airstream travel trailers.. Users are able to view posts without logging into the site. However, in order to respond to posts or add a post of your own, you must log in first, either by using an existing username and password combo or by creating a new user. Users must have a Big Red Number(BRN) in order to be a user on the blog site. ',
      link: 'https://arcane-earth-71904.herokuapp.com/'
    }
  ]);

  const [isCardOpen, setIsCardOpen] = useState(false);
  const currentProjects = projects.filter(project => project.category === category);
  const [currentProject, setCurrentProject] = useState();
  const toggleCard = (repo, i) => {
    //current project
    setCurrentProject({...repo, index: i});
    setIsCardOpen(!isCardOpen);
  }

  return (
    <div>
      {isCardOpen && (
        <Card currentProject={currentProject} onClose={toggleCard} />
      )}
      
      <div className="flex-row">
        {currentProjects.map((repo, i) => (
          
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
