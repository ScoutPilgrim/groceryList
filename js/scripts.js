$(document).ready(function(){
  var myRay = [];
  $('#groceryForm').submit(function(event){
    event.preventDefault();
    var input = ["1", "2", "3", "4", "5"];
    console.log(input);
    input.forEach(function(element) {
      console.log(element);
      var myInput = $('#input' + element).val();
      myRay.push(myInput);
      });
      myRay.sort();
    input.forEach(function(element){
      $("#groceries").append('<li>'+myRay[element -1]+'</li>');
    });
    $('#groceryForm').hide();
    });
  });
