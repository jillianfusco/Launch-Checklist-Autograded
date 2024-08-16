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
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // cargoLevel is cargoMass in HTML
    
   

    if (validateInput(pilot.value) === "Empty" || 
        validateInput(copilot.value) === "Empty" || 
        validateInput(fuelLevel.value) === "Empty" || 
        validateInput(cargoLevel.value) === "Empty") {
        alert("All fields are requied.");
        event.preventDefault();
        return;
    }

    if (validateInput(pilot.value) === "Is a Number") {
        alert("Please enter a valide name for Pilot.");
        event.preventDefault();
        return;
    }

    if (validateInput(copilot.value) === "Is a Number") {
        alert("Please enter a valid name for Copilot.")
        event.preventDefault();
        return;
    }

    if (validateInput(fuelLevel.value) === "Not a Number") {
        alert("Please enter a number for fuel level.");
        event.preventDefault();
        return;
    }

    if (validateInput(cargoLevel.value) === "Not a Number") {
        alert("Please enter a number for cargo mass.")
        event.preventDefault();
        return;
    }


     
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