//backend logic
$(function() {
  var numberList = [];

  //count function
  var count = function countNumbers(counter) {
    for(i = 1; i <= counter; i++) {
      //$("#listOutput").append('<li>' + i + '</li>');
      numberList.push(i);
      // numberList.forEach(function(i){
      //   var ping = i % 3 === 0
      // if (ping) {
      //   i = "ping";
      // } else if (i % 3 !== 0) {
      //
      // }
      // });
      $("#listOutput").append('<li>' + i + '</li>');
    }
    console.log(numberList);
    result = numberList;
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
