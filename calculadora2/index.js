document.addEventListener("DOMContentLoaded", function () {
    // Corrige o segundo input que estava sem classe
    const inputs = document.querySelectorAll(".numero");
    if (inputs.length < 2) {
        console.error("Certifique-se de que ambos os inputs tenham a classe 'numero'.");
        return;
    }

    const botoes = document.querySelectorAll("input[type='submit']");

    // Cria o elemento de resultado dinamicamente
    const resultado = document.createElement("p");
    resultado.id = "resultado";
    resultado.textContent = "Resultado:";
    document.getElementById("box").appendChild(resultado);

    // Função de cálculo
    function calcular(operacao) {
        const num1 = parseFloat(inputs[0].value);
        const num2 = parseFloat(inputs[1].value);

        if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = "Por favor, insira dois números válidos.";
            return;
        }

        let res;
        switch (operacao) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultado.textContent = "Não é possível dividir por zero.";
                    return;
                }
                res = num1 / num2;
                break;
            default:
                resultado.textContent = "Operação desconhecida.";
                return;
        }

        resultado.textContent = "Resultado: " + res;
    }

    // Adiciona eventos aos botões
    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const valor = botao.value;
            if (valor.includes("+")) calcular('+');
            else if (valor.includes("-")) calcular('-');
            else if (valor.includes("*")) calcular('*');
            else if (valor.includes("/")) calcular('/');
        });
    });
});