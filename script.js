// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

let pilot  = document.getElementByID("pilotName");
let copilot = document.getElementByID("copilotName");
let fuelLevel = document.getElementByID("fuelLevel");
let cargoLevel = document.getElementByID("cargoMass");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
 });