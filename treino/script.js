function adicionar(){
    let num = document.getElementById('txtnum')
    let seln = document.getElementById('selnum')
    if (num.value.length == 0 || num.value <= 0 || num.value >100){
        window.alert("Digite um numero valido")
    }else{
        let n=Number(num.value)
        let item=document.createElement('option')
        item.text=n
        seln.appendChild(item)
    }
}