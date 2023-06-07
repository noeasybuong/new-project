$(document).ready(function () {
  $(".buttonRemoveAll").click(function () {
    $("#calculation").html(" ");
    $("#creen-result").html(" ");
  });
});


$("#calculation").css({ "font-size": "40px" });
$("#creen-result").css({ "font-size": "40px" });
//Creen


$(document).ready(function () {

  $(".button").click(function () {
    var a = $(this).html()

    $("#calculation").html($("#calculation").html() + a)






  })

})




//Result
$(document).ready(function () {

  let numberCreen = 0;



  $(".answer").click(function () {
    let numberCalculation = $("#calculation").html()

    if (numberCalculation.includes("x²")) {
      let isPermutation = numberCalculation.replace("x²", " ");
      numberCreen = Number(isPermutation);
      $("#creen-result").html(function () {
        return Math.pow(numberCreen, 2)
      })
    }




    if (numberCalculation.includes("√")) {
      let isPermutation = numberCalculation.replace("√", " ");
      numberCreen = Number(isPermutation);
      return $("#creen-result").html(Math.sqrt(numberCreen))
    }


    numberCreen = eval(numberCalculation);
    $("#creen-result").html(numberCreen)
    if (numberCreen / numberCreen.toFixed(1) != 1) {
      $("#creen-result").html(numberCreen.toFixed(2))
    } else {
      $("#creen-result").html(numberCreen.toFixed(0))
    }


  })
})













