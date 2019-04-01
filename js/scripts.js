$(document).ready(function(){
  var myString = "";
  $('#groceryForm').submit(function(event){
    event.preventDefault();
    var input = ["1", "2", "3", "4", "5"];
    console.log(input);
    input.forEach(function(element) {
      var myInput = $('#input' + element).val();
      myString += myInput.toString()+',';
  
      });
alert(myString);

    });
  });
