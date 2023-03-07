//Apresentação Modal
setTimeout(ApresentarModal, 5000);
 function ApresentarModal(){
    var modal= document.querySelector(".modal");

    if(modal != null){
        document.querySelector(".modal").style.display = "block";

        document.querySelector(".modal a")
        .addEventListener("click", function(){


        document.querySelector(".modal").style.display = "none";

 });
}
}

//Validação Modal(Página Inicial)
if(document.forms["modal_form"] != undefined){

    var form = document.forms["modal_form"];

    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keydown", function(){
        form.email.className = "";
        document.querySelector("span.nao_valido").style.display = "none";

});
}


function validarFormModal(evt){
    var form = document.forms["modal_form"];

    var inputEmail = form.email;
    var valorEmail = form.email.value;

    var posicaoArroba = valorEmail.indexOf("@");

    if( !validarEmail(valorEmail) ){
        
        inputEmail.className="nao_valido";
        document.querySelector("span.nao_valido").style.display = "block";
        evt.preventDefault();
    }
}
//Validação fale conosco
if(document.forms["form_contato"] != undefined){
    alert("Entrou Form")
    var form = document.forms["form_contato"];
    
    form.addEventListener("submit", function(evt){
        alert("Entrou Click");
        var formValido = true;

        if(!naoVazio(form.Nome_Completo.value)){
            form.Nome_Completo.className="nao_valido";
            formValido = "false"
        }
        if(!naoVazio(form.Telefone.value)){
            form.Form.className="nao_valido";
            formValido = "false"
        }
        if(!naoVazio(form.Mensagem.value)){
            form.Mensagem.className="nao_valido";
            formValido = "false"
        }
        if(!naoVazio(form.Email.value)){
            form.Email.className="nao_valido";
            formValido = "false"
        }

        if(!formValido){
            evt.preventDefault();
        }
    });
}

    //document.querySelector("form[name=form_contato] input").addEventListener("keypress", function(this){
      //  this.className = ""
    //});



//Função
function ValidarEmail(email){
    if( 
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 && 
        valorEmail.lastIndexOf(".") > posicaoArroba
    ){
        return true;
    }else{
            return false;
        }
    }

    function naoVazio(texto){
        if(texto.trim().length > 0){
            return true;
        }else{
            return false;
        }
    }
