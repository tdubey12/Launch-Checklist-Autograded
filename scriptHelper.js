
require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
 }
 
 function validateInput(testInput) {
    if(testInput == undefined || testInput == null || testInput == 0 || testInput === "") {
        return "Empty";
    }
    if(isNaN(testInput)){
            return "Not a Number";
    }else{
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    //update list style 
    list.style.visibility = "visible";
    // by default launch ready if error in fule level ot cargo mass will change
    let launchStatus = document.getElementById ("launchStatus");
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";

    let fuelStatus = document.getElementById("fuelStatus");
    if(fuelLevel < 10000){

        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch"
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    } 
    let cargoStatus = document.getElementById ("cargoStatus");
    if(cargoLevel > 10000){
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";

    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     //need to return response json as planetsReturned is returning undefined   
     return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    //select random index and return
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
 }

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;