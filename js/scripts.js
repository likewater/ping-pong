//backend logic
$(function() {
  var numberList = [];
  var alteredList = [];
  //count function
  var count = function countNumbers(counter) {
    //alert(counter);
    for(i = 1; i <= counter; i++) {

      // if (i % 3 === 0) {
      //   i = "ping";
      // } else if (i % 6 === 0) {
      //   i = "pong";
      // } else if (i % 15 === 0) {
      //   i = "ping-pong";
      // } else {
      //   continue;
      // }


      // if (i % 3 === 0) {
      //   i = "ping";
      // } //else

      // if (i % 5 === 0) {
      //   i = "pong";
      // } //else

      // if (i % 15 === 0) {
      //   i = "ping-pong";
      // }

      // if (i % 5 === 0) {
      //   i = "pong";
      // }
      numberList.push(i);
      console.log(numberList);
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
