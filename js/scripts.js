//backend logic
  var numberList = [];
  var alteredList = [];

  //count function
  var count = function countToInput(userInput) {
    for(var i = 1; i <= userInput; i++) {
      $("<li>" + i + "</li>").append(numberList[i]);
    }
}

//front end logic
  $(function() {
    $("#formFlow").submit(function() {
      event.preventDefault();
      var userInput = $("#text-input").val();
      var result = count(userInput);
      $("#listOutput").text(result;)
    });
  });
