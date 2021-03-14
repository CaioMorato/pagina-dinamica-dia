function carregar(){
    var hora = new Date().getHours()
    var msg = document.querySelector("#mensagem")
    var img = document.querySelector("#imagem-hora")

    if (hora > 5 && hora <= 12){
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'manha.png'
    } else if(hora > 12 && hora <= 18){
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = 'tarde.png'
    } else{
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'noite.png'
    }
    
};