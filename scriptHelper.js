// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    // changed cargoLevel to cargoMass to match HTML

    // let pilotStatus  = document.getElementById("pilotStatus");
    // fix the rest
    // let copilot = document.getElementById("copilotName");
    // let fuelLevel = document.getElementById("fuelLevel");
    // let cargoMass = document.getElementById("cargoMass");
    

    if (validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || 
        validateInput(cargoMass) === "Empty") {
        alert("All fields are requied.");        
    }

    if (validateInput(pilot) === "Is a Number") {
        alert("Please enter a valide name for Pilot.");      
       
    }

    if (validateInput(copilot) === "Is a Number") {
        alert("Please enter a valid name for Copilot.")
    }

    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Please enter a number for fuel level.");       
        
    }

    if (validateInput(cargoMass) === "Not a Number") {
        alert("Please enter a number for cargo mass.");       
        
    }

    console.log("Form submission sucessful!")
     
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;