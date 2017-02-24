//backend logic
$(function() {
  var numberList = [];
  var alteredList = [];
  //count function
  //debugger;
  var count = function countNumbers(counter) {
    //alert(counter);
    var text = "";
    var x = counter;
    for(var i = 1; i <= x; i++) {
      //alert(x);
      //$("<li id="listElement + i" " + i + "</li>").append("#listOutput");
      //console.log(numberList[0]);
      var result = text += i + "<br>";
      //alert(result);
      return result;
    }
}

//front end logic
    $("#formFlow").submit(function() {
      event.preventDefault();
      var userInput = $("#textInput").val();
      var result = count(userInput);
      $("#listOutput").text(result);

    });
  });
