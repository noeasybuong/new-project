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
  let y = 0;
  document.getElementById("creen-result").style.fontSize = "40px";
  let x = document.getElementById("calculation").innerHTML;

//Phép tính mũ 2
if (x.includes("²")) {
  let z = x.replace("²", " ");
  y = Number(z);
  return document.getElementById("creen-result").innerHTML = Math.pow(y,2);
}




  //Phép tính căn bậc 2
  if (x.includes("√")) {
    let z = x.replace("√", " ");
    y = Number(z);
    return document.getElementById("creen-result").innerHTML = Math.sqrt(y);
  }




  //Phép tính cơ bản
  y = eval(x);

  if (y / y.toFixed(2) != 1) {
    document.getElementById("creen-result").innerHTML = y.toFixed(2);
  } else {
    document.getElementById("creen-result").innerHTML = y.toFixed(0);
  }
}
