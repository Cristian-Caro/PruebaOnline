const boton = window.document.querySelector('#boton');
boton.addEventListener('click', mostrarDatos);

function mostrarDatos (){
    var mail=document.getElementById('email').value;
    const input1 = window.document.querySelector('#email');
    const boton = window.document.querySelector('#boton');
    const textoinput=input1.value;
    console.log(textoinput);    
    input1.value='';
    input1.focus();
    if (textoinput===mail){
        console.log ('puedes ingresar al sistema :d')
    }else{
            console.log ('no puedes ingresar al sistema :d')
        }

}


