console.log('hello from Jonas at ' + Date())

lala = 999

// z = x + y

/*
parseFloat(x.value)
parseFloat(x.value)
*/

x.size=y.size=10

x.onkeyup=y.onkeyup=function(ev){
    //console.log('you pressed x :',this)
    z.textContent=parseFloat(x.value)+parseFloat(y.value)
}

listCancers=function(id){
    if(!id){console.warn('id not defined')
    }else{
        cbio.get(
            null,
            function(x){
                var div = document.getElementById(id)
                var h = ''
                x.forEach(function(xi,i){
                   if(i==0){
                       h +='<h2>'+xi+'</h2>'
                   }else{
                       h +='<li>'+xi+'</li>'
                   }

                   //debugger 
                })
                div.innerHTML=h
                
            }
        )    
    }
     
    
}

listCancers('cancerTypesDiv')
