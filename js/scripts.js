//backend logic
$(function() {
  var numberList = [];
  var alteredList = [];
  //count function
  var count = function countNumbers(counter) {
    //alert(counter);
    for(i = 1; i <= counter; i++) {
      $("#listOutput").append('<li>' + i + '</li>');
    }
    result = i;
    return result;
  }

//front end logic
    $("#formFlow").submit(function() {
      event.preventDefault();
      var userInput = $("#textInput").val();
      result = count(userInput);
    //$("#listOutput").text(result);
    });
  });
