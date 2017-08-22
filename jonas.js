console.log('hello from jonas.js at ' + Date())

//lala = 999

// z = x + y

/*
parseFloat(x.value)
parseFloat(x.value)
*/

if(document.getElementById('x')){
    x.size=y.size=10
    x.onkeyup=y.onkeyup=function(ev){
        //console.log('you pressed x :',this)
        z.textContent=parseFloat(x.value)+parseFloat(y.value)
    }
}


listCancers=function(id){
    if(!id){
        console.warn('id not defined')
    }else{
        //cbio.get(
        cbio.getCancerStudies(
            function(x){
                var div = document.getElementById(id)
                var h = ''
                x = x.map(function(xi,i){
                   xi = xi.split(/\t/)
                   xi = {id:xi[0],name:xi[1],info:xi[2]}
                   if(i==0){
                       //h +='<h2 style="color:navy">'+xi+'</h2>'
                       h +='<h2 style="color:navy">Cancer Study</h2>'
                   }else{
                       h +='<li id="'+xi.id+'_li">'+xi.id+': '+xi.name+'</li>'
                   }
                   return xi                   
                })
                div.innerHTML=h
                // animate listed entries
                x.slice(1).forEach(function(xi){
                    var li = document.getElementById(xi.id+'_li')
                    li.onmouseover=function(){
                        this.style.color='blue'
                        this.style.backgroundColor='yellow'
                        this.style.cursor='pointer'
                    }
                    li.onmouseleave=function(){
                        this.style.color='black'
                        this.style.backgroundColor=null
                    }
                    //that = this
                    li.onclick=function(){
                        console.log('clicked on ',li)


                    }

                    4
                })
                
            }
        )    
    }
     
    
}


if(document.getElementById('cancerTypesDiv')){
    listCancers('cancerTypesDiv')
}

getSParcs2014=function(n){
    if(!n){n=1000}
    $.getJSON('https://health.data.ny.gov/resource/pzzw-8zdv.json?$limit='+n)
       .then(function(x){
             debugger
      })
    
}

