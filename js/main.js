var inputlength = document.querySelectorAll(".position_data").length;
// console.log(inputlength);
for (var i = 0; i < inputlength; i++) {
  document.querySelectorAll(".position_data")[i].addEventListener('change', function(event) {
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

// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('.result');
//   result.textContent = `You like ${event.target.value}`;
// });

// var val
// var va12
// var va13
// var va14
// var va15
// var va16
// var va17
// var va18
// // const data=[];
// function getVal() {
// val = document.getElementById('inp1').value;
// //    data.push(val);
// console.log(val);
// }
// function getVal2() {
// val2 = document.getElementById('inp2').value;
// console.log(val2);
// }
// function getVal3() {
// val3 = document.getElementById('inp3').value;
// console.log(val3);
// }
// function getVal4() {
// val4 = document.getElementById('inp4').value;
// }
// function getVal5() {
// val5 = document.getElementById('inp5').value;
// console.log(val5);
// }
// function getVal6() {
// val6 = document.getElementById('inp6').value;
// console.log(val6);
// }
// function getVal7() {
// val7 = document.getElementById('inp7').value;
// console.log(val7);
// }
// function getVal8() {
// val8 = document.getElementById('inp8').value;
// console.log(val8);
// }
//
// // const sum =getVal() + getVal2();
// //   console.log(sum);
