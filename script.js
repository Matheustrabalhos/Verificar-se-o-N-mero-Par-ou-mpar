document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    const number = parseInt(document.getElementById('number').value, 10);
    const resultElement = document.getElementById('result');

    if (isNaN(number)) {
        resultElement.textContent = 'Por favor, insira um número válido.';
        resultElement.style.color = 'red';
    } else if (number % 2 === 0) {
        resultElement.textContent = 'O número é par.';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'O número é ímpar.';
        resultElement.style.color = 'blue';
    }
});
