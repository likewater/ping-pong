//backend logic
$(function() {
  var numberList = [];

  //count function
  var count = function countNumbers(counter) {
    for(i = 1; i <= counter; i++) {
      $("#listOutput").append('<li>' + i + '</li>');
      numberList.push(i);
      changeList.forEach(function(i){
      if (i % 3 === 0) {
        i = "ping";
        }
      });
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
