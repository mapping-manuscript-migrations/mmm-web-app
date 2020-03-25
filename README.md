# Mapping Manuscript Migrations - Semantic Portal 

Based on [Sampo-UI &ndash; A framework for implementing semantic portals](https://github.com/SemanticComputing/sampo-ui)

master branch visible at https://mappingmanuscriptmigrations.org

dev branch visible at https://dev.mappingmanuscriptmigrations.org

## Key JavaScript libraries in use

### Client

* [React &ndash; A JavaScript library for building user interfaces](https://reactjs.org/)
* [Material-UI &ndash; React components for faster and easier web development.](https://material-ui.com/)
* [Redux &ndash; A Predictable State Container for JS Apps](https://redux.js.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [deck.gl &ndash; Large-scale WebGL-powered Data Visualization](https://deck.gl) 
* [Leaflet &ndash; a JavaScript library for interactive maps](https://leafletjs.com/) 
* [Cytoscape &ndash; an open source software platform for visualizing complex networks](https://cytoscape.org/)
* [ApexCharts.js &ndash; Open Source JavaScript Charts for your website](https://apexcharts.com/)

### Server

* [Express -- Fast, unopinionated, minimalist web framework for Node.js](https://expressjs.com/)

## Local development

Install the dependencies specified in `package.json` (this command needs to be run only once,
  as long as you don't modify the dependencies):

`npm install`

Run client and server concurrently:

`npm run dev`

## Deploy with Docker

### Build
 `docker build -t sampo-web-app-image .`

### Run
 `docker run -d -p 3006:3001 --name sampo-web-app sampo-web-app-image`

 ### Run with password protected endpoint
 `docker run -d -p 3006:3001 -e SPARQL_ENDPOINT_BASIC_AUTH=your_password --name sampo-web-app sampo-web-app-image`

### Upgrade
```
docker build -t sampo-web-app-image .
docker stop sampo-web-app
docker rm sampo-web-app
docker run -d -p 3006:3001 --name sampo-web-app sampo-web-app-image
```
