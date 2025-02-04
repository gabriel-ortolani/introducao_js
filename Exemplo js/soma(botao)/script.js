const botao = () =>{
    // 'parseFloat(document.getElementById("n1")' esse parte do codigo ele vai por meio do document ir ao arquivo html pegar o elemento com id igual ao designado no caso 'n1'
    // 'value' serve pra ele armazenar o valor do número na variavel
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("op").value;
    let resultado
    if(op == '1'){
        resultado = n1 + n2;
    }else if(op == '2'){
        resultado = n1 - n2;
    }else if(op == '3'){
        resultado = n1 * n2;
    }else if(op == '4'){
    if(n2 !== 0){
        resultado = n1 / n2;
    }else if(op == '4'){
        resultado = "não pode ser dividido por 0"
    }
    }else if(op == '5'){
        resultado = n1 / 5.8;
    }else if(op == '6'){
        resultado = n1 * 5.8;
    }else{
        resultado = "erro"
    }
    // "o resultado é: " + resultado;
    document.getElementById("resultado").innerText = `O resultado é: ${resultado}`
}