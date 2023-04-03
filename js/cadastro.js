const campos = document.querySelectorAll(".input-required");
const spans = document.querySelectorAll(".required");
const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

var nomePren = false
var emailPren = false
var senhaPren = false
var confSenhaPren = false

var msgErro = document.getElementById("msg_erro");
var msgSucesso = document.getElementById("msg_sucesso");

function setError(i){
    campos[i].style.border = "1px solid #e63636";
    spans[i].style.display = "block"
};

function validada(i){
    campos[i].style.border = "1px solid #008000 ";
    spans[i].style.display = "none";
};

function resetError(i){
    campos[i].style.border = ""
    spans[i].style.display = "none"
};

function nameValidate(){
    
    if(campos[0].value.trim().length>=5)
    {   
        validada(0);
        nomePren = true
        
    } else if(campos[0].value.length == 0){
       resetError(0);
       nomePren = false
    }else{
        setError(0);
        nomePren = false
    };
    return nomePren;
};

function emailValidate(){
    if(emailRegex.test(campos[1].value))
    {
        validada(1);
        emailPren = true

    }else if(campos[1].value.length == 0){

        resetError(1);
        emailPren = false

    }else{

        setError(1);
        emailPren = false

    }
    return emailPren;
};

function senhaValidate(){
    if(campos[2].value.length >= 8)
    {   
        validada(2);
        senhaPren = true
        
    }else if(campos[2].value.length == 0){
        resetError(2);
        senhaPren = false

    }else{

        setError(2);
        senhaPren = false
    };
    return senhaPren;
};

function repeteSenhaValidate(){
    if(campos[3].value == campos[2].value)
    {
        validada(3);
      confSenhaPren = true

    }else if(campos[3].value.length == 0){

        resetError(3);
        confSenhaPren = false

    }else{

        setError(3);
        confSenhaPren = false
    };
    return confSenhaPren;
};

function cadastrar(){
    if(nomePren && emailPren && senhaPren && confSenhaPren){

        var listUser = JSON.parse(localStorage.getItem("listUser") || "[]");
        listUser.push(
        {
            nome: campos[0].value,
            email: campos[1].value,
            senha: campos[2].value
        }
        )

        localStorage.setItem("listUser", JSON.stringify(listUser));

        msgSucesso.setAttribute("style","display: Block;");
        msgSucesso.innerHTML = "<strong>Dados Cadastrados com sucesso!</strong>";

        msgErro.setAttribute("style","display: none;");
        msgErro.innerHTML = "";
        
        setTimeout(()=>{
            window.location.href = "./login.html"
        }, 3000)
    } else {

        msgErro.setAttribute("style","display: Block;");
        msgErro.innerHTML = "<strong>Preencha todos os dados corretamente.</strong>";

        msgSucesso.setAttribute("style","display: none;");
        msgSucesso.innerHTML = "";

    };
};


