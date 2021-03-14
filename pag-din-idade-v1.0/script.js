function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas`

if (hora >= 0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >=12 && hora < 18 ){
    img.src = 'tarde.png'
    document.body.style.background = '#b9856f'
} else {
    img.src = 'noite.png'
    document.body.style.background = '#515154'
}

}
