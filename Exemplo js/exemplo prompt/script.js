// definindo as variaveis
let nome = prompt ("Digite o seu nome");
let idade = prompt ("Digite sua idade");
let ano = ("")

if(idade <= 1){
    ano = " ano"
}else{
    ano = " anos"
}

/* olha o documento e procura um item de texto por causa do "innerText" com o id correspondendo,
neste caso "nome" e iguala o valor desse "p" para o conteudo denominado no script.*/
document.getElementById("nome").innerText = "olá " + nome + " você tem " + idade + ano;

