function clearCreen() {
  document.getElementById("calculation").innerHTML = "";
  document.getElementById("creen-result").innerHTML = "";
}

//Creen
function myCreen(value) {
  document.getElementById("calculation").innerHTML += value;
  document.getElementById("calculation").style.fontSize = "50px";
}

//Result
function myResult() {
  let numberCreen = 0;
  document.getElementById("creen-result").style.fontSize = "40px";
  let numberCalculation = document.getElementById("calculation").innerHTML;

//Phép tính mũ 2
if (numberCalculation.includes("²")) {
  let isPermutation = numberCalculation.replace("²", " ");
  numberCreen = Number(isPermutation);
  return document.getElementById("creen-result").innerHTML = Math.pow(numberCreen,2);
}




  //Phép tính căn bậc 2
  if (numberCalculation.includes("√")) {
    let isPermutation = numberCalculation.replace("√", " ");
    numberCreen = Number(isPermutation);
    return document.getElementById("creen-result").innerHTML = Math.sqrt(numberCreen);
  }




  //Phép tính cơ bản
  numberCreen = eval(numberCalculation);

  if (numberCreen/ numberCreen.toFixed(2) != 1) {
    document.getElementById("creen-result").innerHTML = numberCreen.toFixed(2);
  } else {
    document.getElementById("creen-result").innerHTML = numberCreen.toFixed(0);
  }
}
