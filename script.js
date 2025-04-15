let numeroSorteado;

    function sortearNumero() {
      numeroSorteado = Math.floor(Math.random() * 500) + 1;
      console.log("Número sorteado:", numeroSorteado);
      alert('Número sorteado! Agora tente adivinhar.');
      // Opcional: Você pode reabilitar o botão de tentar aqui, se o tiver desabilitado após o acerto.
    }

    function clicou() {
      const numer = document.getElementById('num').value;
      const principal = document.getElementById('princ');

      if (numeroSorteado === undefined) {
        alert('O número ainda não foi sorteado. Clique no botão "Sortear Número" primeiro.');
        return;
      }

      if (numer > 500 || numer === '') {
        alert('Escolha um número válido entre 1 e 500.');
        
      } else if (parseInt(numer) === numeroSorteado) {
        alert('Parabéns! Você acertou!');
      } else if (parseInt(numer) > numeroSorteado) {
        alert('O número é menor.');
      } else {
        alert('O número é maior.');
      }
    }