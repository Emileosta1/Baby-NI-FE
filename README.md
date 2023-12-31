# Baby-NI-FE

## Overview

This React application is designed for data visualization and querying. It interacts with a backend API to retrieve and display aggregated data from a Vertica database.

## Prerequisites

- Node.js and npm installed on your machine.

## Setup Instructions

Install Dependencies:

npm install

Run the Application:

npm start

## Build and run the docker container

docker build -t dockerfe .

docker run -p 3000:3000 dockerfe

The UI should run on the exposed port:3000

Use the Application:

Open your web browser and navigate to http://localhost:3000. You should see the application interface with filters for selecting date range, aggregation type, and more.

Application Structure
src/App.js: The main application component that handles state, data fetching, and rendering.
src/Components/: Directory containing various components used in the application.
src/Components/Header/Header.js: Responsive app bar component.
src/Components/RadioButtons/RadioGroup.js: Component for rendering radio button groups.
src/Components/Charts/Charts.js: Component for rendering data visualizations.
src/Components/SelectAutoWidth.js: Component for selecting Key Performance Indicators (KPIs).
src/Components/Grid/Table.js: Component for rendering data tables.
