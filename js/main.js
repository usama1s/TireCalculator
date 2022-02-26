var inputlength = document.querySelectorAll(".position_data").length;
// console.log(inputlength);
for (var i = 0; i < inputlength; i++) {
  document.querySelectorAll(".position_data")[i].addEventListener('input', function(event) {
    // alert("Fdsa");
    inp1 = document.querySelector("#inp1").value;
    inp2 = document.querySelector("#inp2").value;
    inp3 = document.querySelector("#inp3").value;
    inp4 = document.querySelector("#inp4").value;
    inp5 = document.querySelector("#inp5").value;
    inp6 = document.querySelector("#inp6").value;
    inp7 = document.querySelector("#inp7").value;
    inp8 = document.querySelector("#inp8").value;

    groupA = ((eval(inp7) + eval(inp1) + eval(inp8))/3).toFixed(3);
    groupB = ((eval(inp8) + eval(inp1) + eval(inp2))/3).toFixed(3);
    groupC = ((eval(inp1) + eval(inp2) + eval(inp3))/3).toFixed(3);
    groupD = ((eval(inp3) + eval(inp4) + eval(inp5))/3).toFixed(3);
    groupE = ((eval(inp4) + eval(inp5) + eval(inp6))/3).toFixed(3);
    groupF = ((eval(inp5) + eval(inp6) + eval(inp7))/3).toFixed(3);

    if (groupA>=0.140) {
      document.querySelector("#groupA span").style.color = "green";
    }else{
      document.querySelector("#groupA span").style.color = "red";
    }
    document.querySelector("#groupA span").innerHTML = groupA;

    if (groupB>=0.140) {
      document.querySelector("#groupB span").style.color = "green";
    }else{
      document.querySelector("#groupB span").style.color = "red";
    }
    document.querySelector("#groupB span").innerHTML = groupB;

    if (groupC>=0.140) {
      document.querySelector("#groupC span").style.color = "green";
    }else{
      document.querySelector("#groupC span").style.color = "red";
    }
    document.querySelector("#groupC span").innerHTML = groupC;

    if (groupD>=0.140) {
      document.querySelector("#groupD span").style.color = "green";
    }else{
      document.querySelector("#groupD span").style.color = "red";
    }
    document.querySelector("#groupD span").innerHTML = groupD;

    if (groupE>=0.140) {
      document.querySelector("#groupE span").style.color = "green";
    }else{
      document.querySelector("#groupE span").style.color = "red";
    }
    document.querySelector("#groupE span").innerHTML = groupE;

    if (groupF>=0.140) {
      document.querySelector("#groupF span").style.color = "green";
    }else{
      document.querySelector("#groupF span").style.color = "red";
    }
    document.querySelector("#groupF span").innerHTML = groupF;
  });
}

function reset(){
  document.querySelector("#inp1").value = "NaN";
  document.querySelector("#inp2").value = "NaN";
  document.querySelector("#inp3").value = "NaN";
  document.querySelector("#inp4").value = "NaN";
  document.querySelector("#inp5").value = "NaN";
  document.querySelector("#inp6").value = "NaN";
  document.querySelector("#inp7").value = "NaN";
  document.querySelector("#inp8").value = "NaN";
  document.querySelector("#groupA span").style.color = "black";
  document.querySelector("#groupB span").style.color = "black";
  document.querySelector("#groupC span").style.color = "black";
  document.querySelector("#groupD span").style.color = "black";
  document.querySelector("#groupE span").style.color = "black";
  document.querySelector("#groupF span").style.color = "black";
  document.querySelector("#groupA span").innerHTML = "NaN";
  document.querySelector("#groupB span").innerHTML = "NaN";
  document.querySelector("#groupC span").innerHTML = "NaN";
  document.querySelector("#groupD span").innerHTML = "NaN";
  document.querySelector("#groupE span").innerHTML = "NaN";
  document.querySelector("#groupF span").innerHTML = "NaN";
}
