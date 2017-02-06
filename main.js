// function convertTemp(degrees, type) {
//   if (type === "F") {
//     var conversion = degrees * 9/5 + 32;
//     console.log(degrees + " degrees Celisus is " + conversion + " degrees Fahrenheit");
//   } else if (type === "C") {
//     var conversion = degrees - 32;
//     conversion *= 5/9;
//     console.log(degrees + " degrees Fahrenheit is " + conversion + " degrees Celsius");
//   } else {
//     console.log("Please check your spelling and retry.")
//   }
// }
//
// var celsius = document.getElementById("celsiusValue");
// var fahrenheit = document.getElementById("fahrenheitValue");
// var input = document.getElementById("inputDegree");
// var output = document.getElementById("outputDegree");
//
// alert(input.textContent);
//
//
// function convertTemp() {
//   var celsius = document.getElementById("celsiusValue");
//   var fahrenheit = document.getElementById("fahrenheitValue");
//   var input = document.getElementById("inputDegree");
//   var output = document.getElementById("outputDegree");
//
//   if (type === "F") {
//     var conversion = degrees * 9/5 + 32;
//     console.log(degrees + " degrees Celisus is " + conversion + " degrees Fahrenheit");
//   } else if (type === "C") {
//     var conversion = degrees - 32;
//     conversion *= 5/9;
//     console.log(degrees + " degrees Fahrenheit is " + conversion + " degrees Celsius");
//   } else {
//     console.log("Please check your spelling and retry.")
//   }
// }

function convertTemp() {
  var celsius = document.getElementById("celsiusValue");
  var fahrenheit = document.getElementById("fahrenheitValue");

  if (celsius.checked) {
    var input = document.getElementById("inputDegree");
    var output = document.getElementById("outputDegree");
    var valueDegree = input.value;
    valueDegree *= 9/5;
    valueDegree += 32;
    output.value = valueDegree;
  } else if (fahrenheit.checked) {
    var input = document.getElementById("inputDegree");
    var output = document.getElementById("outputDegree");
    var valueDegree = input.value;
    valueDegree -= 32;
    valueDegree *= 5/9;
    output.value = valueDegree;
  }
}

function calcSphereVolume() {
  var radius = document.getElementById("sphereRadius");
  var volume = document.getElementById("sphereVolume");
  var radiusValue = radius.value;
  var sphereValue = (4/3) * Math.PI * Math.pow(radiusValue, 3);
  volume.value = sphereValue;
}

function calcPrismVolume() {
  var length = document.getElementById("lengthValue");
  var width = document.getElementById("widthValue");
  var height = document.getElementById("heightValue");
  var prism = document.getElementById("prismVolume");

  var volume = length.value;
  volume *= width.value;
  volume *= height.value;

  prism.value = volume;
}

function calcConeVolume() {
  var radius = document.getElementById("coneRadius");
  var height = document.getElementById("coneHeight");
  var coneVolume = document.getElementById("coneVolume");
  var calcVolume;

  calcVolume = Math.PI * Math.pow(radius.value, 2) * height.value / 3;

  coneVolume.value = calcVolume;

}
