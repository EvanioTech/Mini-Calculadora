function calc() {
    const n1 = parseInt(document.getElementById('n1').value)
    const n2 = parseInt(document.getElementById('n2').value)
    if (typeOp() == 'Somar') {
        const total = n1 + n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total + '!'
    }
    else if (typeOp() == 'Subtrair'){
        const total = n1 - n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total + '!'
    }
    else if (typeOp() == 'Multiplicar'){
        const total = n1 * n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total + '!'
    }
    else if (typeOp() == 'Dividir'){
        const total = n1 / n2
        document.getElementById('result').innerHTML = 'O resultado é ' + total + '!'
    }
    
typeOp()
changeColor()
obg()
inserirImagem()
    
}
function typeOp() {
    let select = document.getElementById("opcoes");
  let selectedValue = select.options[select.selectedIndex].value;
  return selectedValue;
}

function changeColor() {
    
        
        let newCor = document.getElementById("result");
         newCor.style.color = "red";
         let newsCor = document.getElementById("thanks");
         newsCor.style.color = "DarkSlateBlue";
}

function obg() {
   let agradecimento = document.getElementById('thanks')
   agradecimento.innerHTML = 'Obrigador por usar nossa Calculadora!'
}

function inserirImagem() {

    const minhaDiv = document.getElementById("imagem");

    const imagem = document.createElement("img");

    imagem.src = "./assets/a9948d44-52ca-423a-9ac0-9f05e4eee164_458x280.gif";  // Substitua pelo caminho real da sua imagem

    minhaDiv.appendChild(imagem);
}