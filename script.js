let numeroSorteado;
let tentativas = 0

    function sortearNumero() {
      numeroSorteado = Math.floor(Math.random() * 500) + 1;
      console.log("Número sorteado:", numeroSorteado);
      alert('Número sorteado! Agora tente adivinhar.');
      tentativas = 0
      const tentar = document.getElementById('tentar');

      if (tentar) {
      tentar.innerHTML = '';
      }
    }

    function clicou() {
      const numer = document.getElementById('num').value;
      const principal = document.getElementById('princ');
      const tentar = document.getElementById('tentar');

      if (numeroSorteado === undefined) {
        alert('O número ainda não foi sorteado. Clique no botão "Sortear Número" primeiro.');
        return;
      }

      if (numer > 500 || numer === '') {
        alert('Escolha um número válido entre 1 e 500.');
        
      } else if (parseInt(numer) === numeroSorteado) {
        alert('Parabéns! Você acertou!');

        tentativas++;

        if (tentar) {
          tentar.innerHTML = `Parabéns, você precisou de ${tentativas} tentativa(s) para acertar o número.`;
        }
      } 
      else if (parseInt(numer) > numeroSorteado) {
        tentativas++;
        alert('O número é menor.');
      } 
      else {
        tentativas++;
        alert('O número é maior.');
      }
    }