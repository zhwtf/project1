// Calculator

var RowCount = 4; 

//calculates percent instantly
function calculator() {
  for (var i = 1; i<=RowCount; i++) {
    var numerator = document.getElementById("A"+i+"_num").value;
    var denominator = document.getElementById("A"+i+"_den").value;
    var percent = numerator / denominator * 100;
    percent = Math.round(percent * 100) / 100;
    if( isFinite(numerator) == true && isFinite(denominator)==true && numerator>=0 && denominator>0) {
      document.getElementById("percent"+i).innerHTML = percent + "%";
      
    }
    else if(numerator=='' || denominator==''){
      document.getElementById("percent"+i).innerHTML = "";

    }
    else{
      document.getElementById("percent"+i).innerHTML = "invalid input";
    
    }
  }
}

