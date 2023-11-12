
//const { formSubmission } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");

//const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {   
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        let validatedPilotName = validateInput (pilot);
        let validatedCopilotName = validateInput (copilot);
        let validatedFuelLevel = validateInput (fuelLevel);
        let validatedCargoLevel = validateInput(cargoLevel);

        if (validatedPilotName ==="Empty" || validatedCopilotName ==="Empty" || validatedFuelLevel ==="Empty" || validatedCargoLevel ==="Empty") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();

        }

        let alertText = "";
        if(validatedPilotName !== "Not a Number"){
            console.log("validated pilot name:" + validatedPilotName);
            alertText += " Please enter valid pilot name."
        }
        if(validatedCopilotName !== "Not a Number") {
            console.log("validated co pilot name:"+ validatedCopilotName);
            alertText += " Please enter valid copilot name.";
        }
        if(validatedFuelLevel !== "Is a Number") {
            console.log("validated fuel level:"+validatedFuelLevel);
            alertText += " Please enter valid fuel level number.";
        }
        if(validatedCargoLevel !== "Is a Number") {
            console.log("validated cargo level:"+validatedCargoLevel);
            alertText += " Please eneter valid cargo mass number.";
        }
        if(alertText !== "") {
            alert(alertText);
            event.preventDefault();

        } else {
            formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
            event.preventDefault();
        }

    })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star,pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })
    
 });