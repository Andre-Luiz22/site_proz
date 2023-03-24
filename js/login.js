function logar(){
    var digEmail = document.getElementById("email")
    var digSenha = document.getElementById("senha")
    var msgErro = document.getElementById("msg_erro")
    var listUser = []

    var userValidado = {
        nome: "",
        email: "",
        senha: ""
    }

    listUser = JSON.parse(localStorage.getItem("listUser"))

    listUser.forEach((i) => {
        if(email.value == i.email && senha.value == i.senha){

            userValidado ={

                nome: i.nome,
                email: i.email,
                senha: i.senha

            }
    }})
    
    if(digEmail.value == userValidado.email && digSenha.value == userValidado.senha && digEmail.value.length != 0 && digSenha.value.length != 0){
        window.location.href = "./index.html"
    } else {

        digEmail.setAttribute("style", "border: 1px solid #e63636;")
        digSenha.setAttribute("style", "border: 1px solid #e63636;")
        digEmail.focus()

        msgErro.setAttribute("style", "display : block")
        msgErro.innerHTML = "Usuario e/ou senha incorretos."
    }
    

};