function mostrarImagem(jogador) {
    let caminhoImagem = "";

    if (jogador === "cr7") {
        caminhoImagem = "imagens/cr7.jpg";
    } else if (jogador === "messi") {
        caminhoImagem = "imagens/messi.jpg";
    } else if (jogador === "neymar") {
        caminhoImagem = "imagens/neymar.jpg";
    }

    const img = document.getElementById("imagem");
    img.src = caminhoImagem;
    img.style.display = "block";
}

function limparImagem() {
    const img = document.getElementById("imagem");
    img.src = "";
    img.style.display = "none";
}
