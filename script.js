function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if( fano.value.length === 0 || fano.value > ano){
        window.alert('ERRO! Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano  -  Number(fano.value) 
        var genero  = ' '
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if( idade >= 0 && idade <= 12){
                //crianca
                
                img.setAttribute('src', 'hcrianca.png')
            }else if( idade < 17){
                //jovem
                img.setAttribute('src', 'hjovem.png')
            }else if( idade < 59){
                //Adulta
                
                img.setAttribute('src','hadulto.png')
            }else{
                //Idosa
                img.setAttribute('src','hidoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if( idade >= 0 && idade <=12){
                //crianca
                img.setAttribute('src', 'mcrianca.png')
            }else if( idade < 17){
                //jovem
                img.setAttribute('src', 'mjovem.png')
            }else if( idade < 59){
                //Adulta
                img.setAttribute('src','madulta.png')
            }else{
                //Idosa
                img.setAttribute('src','midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`<h2>Resultado</h2>Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}