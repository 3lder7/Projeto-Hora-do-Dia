function carregar(){
    //definindo variáveis e horas
    var msg1 = window.document.getElementById('msg1')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var agora = new Date()//puxar a data atual
    var hora = agora.getHours()//puxar a hora atual

    msg1.innerHTML = `Agora são <strong>${hora} horas</strong>.`

    if(hora >= 0 && hora < 12){
        msg2.innerHTML = 'Bom dia!'
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#E9D2F4'
    }else if(hora >= 12 && hora < 18){
        msg2.innerHTML = 'Boa tarde!'
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#E55812'
    }else{
        msg2.innerHTML = 'Boa noite!'
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#12130F'
    }
}
