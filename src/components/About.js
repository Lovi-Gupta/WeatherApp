import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="display-4">About Weather App</h2>
      <p className="lead">
        Welcome to the Weather App! This application provides you with current weather
        information for different locations around the world.
      </p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Features:</h5>
          <ul className="list-group">
            <li className="list-group-item">Get real-time weather updates</li>
            <li className="list-group-item">Search for weather information by location</li>
            <li className="list-group-item">View detailed weather forecasts of whole week</li>
          </ul>
        </div>
      </div>
      <p className="mt-3">
        This app uses data from a reliable weather API to ensure accurate and up-to-date
        information. Enjoy exploring the weather conditions in your favorite places!
      </p>
    </div>
  );
};

export default About;
