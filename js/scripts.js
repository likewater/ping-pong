//backend logic
$(function() {
  var numberList = [];
  //count function
  var count = function countNumbers(counter) {
    for(i = 1; i <= counter; i++) {
      $("#listOutput").append('<li>' + i + '</li>');
      numberList.push(i);
      numberList.forEach(function(i){
      // if (i % 5 === 0){
      //   i = "pong";
      //   }
      });
    }
    console.log(numberList);
  }

//front end logic
    $("#formFlow").submit(function() {
      event.preventDefault();
      var userInput = $("#textInput").val();
      result = count(userInput);
    //$("#listOutput").text(result);
    });
  });
