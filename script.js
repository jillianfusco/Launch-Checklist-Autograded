// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");




window.addEventListener("load", function() {

    let listedPlanets;

   
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse;

    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // });

    let form = document.getElementById("launchForm"); 

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let list;
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        
    });
    
 });