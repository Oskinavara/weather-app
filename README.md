# weather-app

## [Live Demo](https://oskinavara-weather-app.netlify.com/)

## Installation

  To run this app locally, paste following commands into terminal:
```
git clone https://github.com/Oskinavara/weather-app.git;
npm install;
npm run serve;
```

## Description

  **Weather app** is an application for checking weather and forecasts from all over the world. On startup, the user is prompted to allow the browser for checking his location. If user agrees, application will automatically show him current weather. Location can also be provided using input located at the top of a page. Application stores last 5 locations visited and displays them at the bottom of the page. User can go back to a location from history by clicking on it. There is also a functionality to switch back and forth between Metric and Imperial unit systems.
  
  Data for the application was fetched from following open API [Open Weather Map](https://openweathermap.org/api). Apart from current weather, there is an additional feature: a 5-day forecast, to which data was also provided for free by Open Weather Map.
  
## Plugins and libraries

  To build this application I used:
#### [Vue](https://vuejs.org/) - a front-end framework
#### [Vuex](https://vuex.vuejs.org/) - a state management library for Vue
#### [axios](https://github.com/axios/axios) - a promise-based http client

  
