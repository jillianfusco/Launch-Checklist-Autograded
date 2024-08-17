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

    console.log("Form submission sucessful!");

    let pilotStatus  = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  
    let readyForLaunch = true;

    
    
//     if (fuelLevel < 10000 && cargoMass < 10000) {   
//         readyForLaunch = false;        
//         fuelStatus.innerHTML = "Fuel level too low for launch";
//         cargoStatus.innerHTML = "Cargo mass low enough for launch";
       
//     } else if (cargoMass > 10000 && fuelLevel > 10000) {  
//         readyForLaunch = false; 
//         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
//         fuelStatus.innerHTML = "Fuel level high enough for launch";
        
//    } else if (fuelLevel < 10000 && cargoMass > 10000) {
//         readyForLaunch = false;    
//         fuelStatus.innerHTML = "Fuel level too low for launch";
//         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
//    } else {
//         readyForLaunch = true;
//    }

    if (fuelLevel < 10000) {
        readyForLaunch = false;
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMass > 10000) {
        readyForLaunch = false;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    faultyItems.style.visibility = "visible";
    
   if (readyForLaunch) {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";
} else {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
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