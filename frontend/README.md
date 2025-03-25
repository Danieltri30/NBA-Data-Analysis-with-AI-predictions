# NBA Stats Predictor Frontend

This is the frontend portion of the NBA Stats Predictor App, built with [Create React App](https://github.com/facebook/create-react-app).  
It displays a list of today's NBA games using real-time data from the [BallDontLie API](https://www.balldontlie.io/) via a secure Node.js proxy backend server.  
This frontend is connected to a React-based UI with support for routing, live data fetching, and user interaction.

> **Important:** This frontend depends on the backend proxy server running from the root directory (`proxy-server.js`) to handle API key authentication and fetch NBA game data.  
> The full application is intended to be run via the root project using `npm start`.

---

## Getting Started

To run this frontend independently:

```bash
cd frontend
npm install
npm start
```

This wil run the React development server at http://localhost:3000.

To run the full stack application (frontend + backend proxy), return to the project root and use: 

```bash
npm install
npm start
```

This starts both the backend and frontend concurrently using the "concurrently" package.

---

## Features

- Displays a list of NBA games for the current day

- Fetches data securely through a proxy Node.js backend

- Automatically updates game list daily

- Logos for each team shown

- Games sorted by start time, and alphabetically if times are equal

- Responsive and styled with dark theme CSS

---

## Available Scripts (in /frontend)

In the frontend directory, you can run:

```bash 
npm start
```
- Runs the app in the development mode.
- Open http://localhost:3000 to view it in your browser.
- The page will reload when you make changes. You may also see lint errors in the console.

```bash 
npm test
```
- Launches the test runner in the interactive watch mode.

```bash 
npm run build
```
- Builds the app for production to the build folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.

- The build is minified and the filenames include the hashes.

```bash 
npm run eject
```
- Note: this is a one-way operation. 

- If you aren’t satisfied with the build tool and configuration choices, you can eject at any time.
- This command will remove the single build dependency from the project.

- Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into the project for better control.