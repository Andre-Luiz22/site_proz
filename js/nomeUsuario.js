
var userLogado = JSON.parse(localStorage.getItem("usuarioLogado"))

var mudaNome = document.getElementById("nome_usuario")

mudaNome.innerHTML = userLogado.nome

