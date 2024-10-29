function gerar() {
  var iNumber = document.querySelector('input#iNumber').value
  var msgErro = document.querySelector('div#msgErro')
  if (iNumber.length == 0) {
    msgErro.innerHTML = "<p style='color:red;'>*Por favor, insira a tabuada desejada.*"
    msgErro.style.display = "block"
  } else {
    gere()
  }
  function gere() {
    resultado.style.display = "block"
    var select = document.querySelector('select')
    select.replaceChildren()
    for (var option = 1; option < 11; option++) {
      var options = document.createElement("option")
      options.innerHTML = `${Number(iNumber)} x ${option} = ${Number(iNumber) * option}`
      select.appendChild(options)
    } 
  }
}
function puff() {
  msgErro.style.display = "none"
}