function contar(){
    
    var ini=document.querySelector('input#txti')
    var fim=document.querySelector('input#txtf')
    var passo=document.querySelector('input#txtp')
    var res=document.querySelector('div#res')
    let=res=document.getElementById('res')
    if (ini.value.length ==0 || fim.value.length == 0|| passo.value.length == 0){
        window.alert('[erro] faltam dados!')
    }else{
        res.innerHTML='contando: <br>'
        let i = Number(ini.value)
        let f=Number(fim.value)
        let p=Number(passo.value)
        if (p<=0 ){
            window.alert('passo invalido! considerando passo 1')
            p=1
        }
        if (i<f){//contagem crescente
            for(let c = i;c<=f;c +=p){
                res.innerHTML +=`${c} \u{1f449}`
            }
            
        }else{//contagem regressiva
            for(let c = i;c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}