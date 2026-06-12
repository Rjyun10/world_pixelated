function carregarComponente(idElemento, caminhoArquivo) {
  fetch(caminhoArquivo)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(idElemento).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar o componente:", error));
}

// 1. Identifica onde o site está rodando (Local ou GitHub)
const nomeRepositorio = window.location.pathname.split("/")[1];
const emProducao = window.location.hostname.includes("github.io");

// 2. Define a base incluindo a nova pasta 'components'
const urlBase = emProducao ? `/${nomeRepositorio}/components/` : "/components/";

// 3. Executa a chamada juntando a base com os arquivos
carregarComponente("header-container", urlBase + "header.html");
carregarComponente("footer-container", urlBase + "footer.html");
