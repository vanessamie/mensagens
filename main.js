//variáveis?
//dados de entrada?
//dados de saída?

const mensagens = [
    "Não atrase o seu progresso com medo de fracassar",
    "Não há sucesso sem dificuldade!",
    "Se não puder fazer tudo, faça tudo o que puder",
    "Persistencia é o caminho para o sucesso",
    "Quando achamos ter todas as respostas, a vida muda todas as perguntas",
    "Não coloque limite em seus sonhos, coloque fé",
    "A única coisa impossível é o que você não tenta",
    "Dê o seu melhor, nas condições que você tem, enquanto não tem condições melhores para fazer melhor ainda!",
    "O que acontece depois que a neve derrete? "
]

const resposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const btnPerguntar = document.querySelector("#btn");


//clicar em fazer pergunta
inputPergunta.focus(); 

function fazerPergunta() {
    if(inputPergunta.value == "") {
        alert("Digite sua pergunta!");
        return
    }

    btnPerguntar.setAttribute("sisable", true);
    
    const pergunta = "<div>" + inputPergunta.value + "</div>"

    //gerar número aleatório
    const totalMensagens = mensagens.length - 1;    
    const numeroAleatorio = Math.floor(Math.random() * totalMensagens);

    resposta.innerHTML = pergunta + mensagens[numeroAleatorio];

    //sumir a resposta depois de um determinado tempo (5 segundos)
    setTimeout(function() {
        resposta.style.opacity = 0
    }, 4000)

    limpaTela();
}

function limpaTela(){
    inputPergunta.value = "";
    inputPergunta.focus();
}

inputPergunta.addEventListener("click", function() {
    location.reload();
})