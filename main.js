function convertTemp(degrees, type) {
  if (type === "F") {
    var conversion = degrees * 9/5 + 32;
    console.log(degrees + " degrees Celisus is " + conversion + " degrees Fahrenheit");
  } else if (type === "C") {
    var conversion = degrees - 32;
    conversion *= 5/9;
    console.log(degrees + " degrees Fahrenheit is " + conversion + " degrees Celsius");
  } else {
    console.log("Please check your spelling and retry.")
  }
}

var celsius = document.getElementById("celsiusValue");
var fahrenheit = document.getElementById("fahrenheitValue");
var input = document.getElementById("inputDegree");
var output = document.getElementById("outputDegree");

alert(input.textContent);


function convertTemp() {
  var celsius = document.getElementById("celsiusValue");
  var fahrenheit = document.getElementById("fahrenheitValue");
  var input = document.getElementById("inputDegree");
  var output = document.getElementById("outputDegree");

  if (type === "F") {
    var conversion = degrees * 9/5 + 32;
    console.log(degrees + " degrees Celisus is " + conversion + " degrees Fahrenheit");
  } else if (type === "C") {
    var conversion = degrees - 32;
    conversion *= 5/9;
    console.log(degrees + " degrees Fahrenheit is " + conversion + " degrees Celsius");
  } else {
    console.log("Please check your spelling and retry.")
  }
}
}
