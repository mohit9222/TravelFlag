## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Flow Diagram](#flowdiagram)

### General Info
### TravelFlag Coding Assignment

TravelFlag is a project to authenticate email/ password and perform CRUD operations.

## Technologies
A list of technologies used within the project:
* [HTML5]
* [CSS3]
* [Javascript]
* [ReactJS]
* [Bootstrap]

## Installation
The application is developed using Javascript along with React JS(framework)
$ git clone https://github.com/mohit9222/TravelFlag.git
$ npm install
$ npm start

### How to run this application locally
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### Flow diagram

Below is the flow diagram which shows the flow of te data
App Launch -> Landing Page(Login)
Landing Page(Login) - > Enter the Email ID and Password
Enter the Email ID and Password -> Email Id & Password is valid
Email Id & Password is valid -NO-> Enter the Email ID and Password
Email Id & Password is valid -YES-> Dashboard Page (Display data)
Dashboard Page (Display data) -> Add Album -> Modal -> Fill in the details and Save
Dashboard Page (Display data) -> Delete Album
Dashboard Page (Display data) -> Logout -> Enter the Email ID and Password