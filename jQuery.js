$(document).ready(() => {
  $("#add").on('click', () => {    
    Add();    
  })

  $("#min").on('click', () => {
    Substract()
  })

  $("#multiply").on('click', () => {    
    Multiply()
  })

  $("#divide").on('click', () => {    
    Divide();
  })

  $("#clear").on('click', () => {    
    $("#result").empty()
    $("#firstInput").val('')
    $("#secondInput").val('')
  })
});

function Add(){    
  let no1 = parseInt($("#firstInput").val());    
  let no2 = parseInt($("#secondInput").val());    
  let result = no1 + no2;    
  $("#result").append(`<h3>${result}</h3>`)
}
function Substract(){    
  let no1 = parseInt($("#firstInput").val());    
  let no2 = parseInt($("#secondInput").val());    
  let result = no1 - no2;    
  $("#result").append(`<h3>${result}</h3>`)  
}    
function Multiply(){    
  let no1 = parseInt($("#firstInput").val());    
  let no2 = parseInt($("#secondInput").val());    
  let result = no1 * no2
  $("#result").append(`<h3>${result}</h3>`)
}    
function Divide(){
  let no1 = parseInt($("#firstInput").val());    
  let no2 = parseInt($("#secondInput").val());    
  let result = no1 / no2;    
  $("#result").append(`<h3>${result}</h3>`)    
}