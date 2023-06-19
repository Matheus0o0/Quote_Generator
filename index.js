function obterCitacao() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quote = data.content;
      const author = data.author;

      document.getElementById('quote').textContent = `"${quote}"`;
      document.getElementById('author').textContent = `- ${author}`;
    })
    .catch(error => {
      console.log('Erro ao obter a citação:', error);
    });
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', obterCitacao);