function carregarComponente(idElemento, caminhoArquivo) {
  fetch(caminhoArquivo)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(idElemento).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar o componente:", error));
}

// Executa a função para o header e o footer
carregarComponente("header-container", "header.html");
carregarComponente("footer-container", "footer.html");
