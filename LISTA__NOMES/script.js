function adicionarNome() {

    //variaveis e constantes
    let mensagem = "Nome adicionado a lista!"
    const Nome = document.getElementById("Nome")
    let texto = Nome.value.trim()
    const msg = document.getElementById("mensagem")

    //muda a cor da font de texto para verde
    msg.style.color = "#12d11c"

    //texto apresentado ao receber um nome
    msg.textContent = mensagem

    // SE texto = vazio, mensagem de erro...
    if (texto == ""){
        //muda a cor da font de texto para vermelho
        msg.style.color = "#ff4b3c"
        
        msg.textContent = "Adicione um nome válido"
        
    }

    // senão, adiciona nome na lista
    else {
        // pega a tag ul do html
        const listaNomes = document.getElementById("listaNomes")

        // cria uma li dentro da ul
        let novoNome = document.createElement("li")

        // muda o valor da variavel para igual ao que foi adicionado no input
        novoNome.textContent = texto

        //adiciona o valor da variavel no li do html
        listaNomes.appendChild(novoNome)
    }
    //limpa o campo do input
    Nome.value = ""
}