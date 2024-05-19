function tabuada(){
    let num =document.getElementById('txtn')
    let tab =document.getElementById('seltab')
    if (num.value == 0){
       window.alert('DIgite um numero')
    } else {
        n = Number(num.value)
        c = 1
        tab.innerHTML = ""
        while( c <= 100){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    } 
    
}