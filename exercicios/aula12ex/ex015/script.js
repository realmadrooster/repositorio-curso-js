function verificar(){
    var data=new Date()
    var ano =data.getFullYear()
    var fano=window.document.getElementById('txtano')
    var res=window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[erro] verifique os dados e tente novamente')
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano - Number(fano.value)//ok
        var gênero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero='homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','criancamenino.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }else{
                //idoso
                img.setAttribute('src','idosohomem.png')
            }
        }else if(fsex[1].checked){
            gênero='mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','criancamenina.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','adultomulher.png')
            }else{
                //idoso
                img.setAttribute('src','idosomulher.png')
            }
        }
        
        res.style.textAlign='center'
        res.innerHTML=`detectamos ${gênero} com ${idade} anos`//ok
        res.appendChild(img)

    }
}