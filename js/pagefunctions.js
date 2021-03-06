//Function to convert temperature
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

//Function to calculate the volume of a sphere
function calcSphereVolume() {
  var radius = document.getElementById("sphereRadius");
  var volume = document.getElementById("sphereVolume");
  var radiusValue = radius.value;
  var sphereValue = (4/3) * Math.PI * Math.pow(radiusValue, 3);
  volume.value = sphereValue;
}

//Function to calculate the volume of a rectangular or cubix prism
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

//Function to calculate the volume of a cone
function calcConeVolume() {
  var radius = document.getElementById("coneRadius");
  var height = document.getElementById("coneHeight");
  var coneVolume = document.getElementById("coneVolume");
  var calcVolume;

  calcVolume = Math.PI * Math.pow(radius.value, 2) * height.value / 3;

  coneVolume.value = calcVolume;
}
