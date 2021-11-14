
  // slider function
function updateTextInput(val) {
    document.getElementById('input').value=val; 
  }

  // Getting value from the input Field


  var book = document.getElementById("book").value;

 
  


  function getInputValue(){
    // Selecting the input element and get its value 
    var book = document.getElementById("book").value;
    var inputVal = document.getElementById("input").value;
    
    var x = book * inputVal;

    var z = inputVal - x;

    document.getElementById("answer").value = z;


  }

 
