// paste your function that converts farenheit to celcius here:

function farenheitToCelsius(farenheit){
  let step1 = farenheit - 32;
  let step2 = step1 * 5;
  let c = step2 / 9;
  return c;
}

// function here that shows the answer and shows whether it is freezing of boiling.

function displayAnswer(c){
  $("#answer").html(c);
  if (c >= 100){
    $("#boiling-warning").fadeIn();
  } else if (c <= 0){
    $("#freezing-warning").fadeIn();
  }
}
// listen for submit of the form to run the function that converts and the one that 

$("#temperature-conversion-form").on("submit", function(){
  $("#boiling-warning").hide();
  $("#freezing-warning").hide();
  let f = $("#farenheit-input").val();
  let c = farenheitToCelsius(f);
  displayAnswer(c);
});