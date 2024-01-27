function calc() {
    const n1 = parseInt(document.getElementById('n1').value)
    const n2 = parseInt(document.getElementById('n2').value)
    if (typeOp() == 'Somar') {
        const total = n1 + n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total
    }
    else if (typeOp() == 'Subtrair'){
        const total = n1 - n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total
    }
    else if (typeOp() == 'Multiplicar'){
        const total = n1 * n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total
    }
    else if (typeOp() == 'Dividir'){
        const total = n1 / n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total
    }
    
typeOp()
    
}
function typeOp() {
    let select = document.getElementById("opcoes");
  let selectedValue = select.options[select.selectedIndex].value;
  return selectedValue;
}

