document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", () => {
        window.location.href = "index2.html";
    });
});

const respostas = {};

function salvarResposta(questao, valor) {
    respostas[questao] = valor;
}

function calcularResultado() {
    const contagem = {};

    for (const resposta of Object.values(respostas)) {
        if (contagem[resposta]) {
            contagem[resposta]++;
        } else {
            contagem[resposta] = 1;
        }
    }

    const personagem = Object.keys(contagem).reduce((a, b) => 
        contagem[a] > contagem[b] ? a : b
    );

    return personagem;
}

document.querySelector('.botao').addEventListener('click', () => {
    const inputs = document.querySelectorAll('input[type="radio"]:checked');

    if (inputs.length === 0) {
        alert('Por favor, selecione uma resposta antes de prosseguir.');
        return;
    }

    const questaoAtual = document.querySelector('.questoes .pergunta').textContent;
    const valorSelecionado = inputs[0].value;

    salvarResposta(questaoAtual, valorSelecionado);
    const proximaPagina = calcularResultado();
    alert(`Você é o: ${proximaPagina}`);
});

function salvarResposta(questao, valor) {
    respostas[questao] = valor;
}

function calcularResultado() {
    const contagem = {};
    for (const resposta of Object.values(respostas)) {
        if (contagem[resposta]) {
            contagem[resposta]++;
        } else {
            contagem[resposta] = 1;
        }
    }
    return Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);
}
