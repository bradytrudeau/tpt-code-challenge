# TPT Fullstack Software Developer Code Challenge

## Table Of Contents

- [About the Application](#about-the-application)
- [Application Preview](#application-preview)
- [Technology Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Using The Application](#using-the-application)
- [Authors](#authors)

## About The Application

This application allows the user to search for movies in The Open Movies Database and view a variety of details about each movie.

## Application Preview

[Demo Application](https://hidden-hamlet-87103.herokuapp.com/)

## Tech Stack

This application is built with the following technologies:

- [Graphql](https://graphql.org/)
- [Javascript](https://www.javascript.com/)
- [Node](https://nodejs.org/en)
- [React](https://react.dev/)
- [HTML](https://www.w3schools.com/html/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

### Prerequisites

Before running this application locally, please make sure you have the following installed on your machine:

- Node
- NPM

To test this you can run the following commands:

- `node -v`
- `npm -v`

### Installation

- Clone the repository by running `git clone https://github.com/bradytrudeau/tpt-code-challenge.git`
- Open the repository in your editor of choice and run `npm install` from the root directory
- In the root directory, create an .env file that includes the following environment variables:
  - SERVER_PORT
  - BASE_URL
  - API_KEY
  - PORT
  - REACT_APP_GQL_API_BASE_URL
- `npm run server` from the root directory
- `npm run client` from the root directory
- Note: The `npm run client` command will automatically open up a new browser tab for you!

## Using the Application

Upon render of the app, you will be able to type the title of a movie into the visible search bar. After doing so, click the "Search" button and you will be routed to a view that will display the movies that match your search. You can click through the pages to see all of the results that match your search or you are able to click on each individual movie component to display additional information about the movie. To enter a new movie title, click on the "Search Again" button located at the bottom of the page.

## Authors

- [Brady Trudeau](bradytrudeau@gmail.com)
