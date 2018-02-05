// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw1
// (Windows)   cd c:\code\hw1
// Then type:
// node hw1.js

// HOMEWORK 1

// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen, when this code is executed.
// Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 67,
    conditions: "Sunny"
  },
  forecast: [
    { temperature: 65, conditions: "Mostly Cloudy" },
    { temperature: 70, conditions: "Partly Cloudy" }
  ]
}

let currentTemp = weatherData.current.temperature;
let currentCond = weatherData.current.conditions.toLowerCase();
let tommTemp = weatherData.forecast[0].temperature;
let tommCond = weatherData.forecast[0].conditions.toLowerCase();
let afterTommTemp = weatherData.forecast[1].temperature;
let afterTommCond = weatherData.forecast[1].conditions.toLowerCase();

console.log("Currently it is " + currentTemp + " degrees and " + currentCond + "." + " Tomorrow it will be " + tommTemp + " and " + tommCond + "." + " The next day we will see " + afterTommCond + " skies, with a temperature of " + afterTommTemp + ".");
// console.log("Tomorrow it will be " + tommTemp + " and " + tommCond + ".");
// console.log("The next day we will see " + afterTommCond + " skies, with a temperature of " + afterTommTemp + ".");
