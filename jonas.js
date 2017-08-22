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
                listCancers.dt={study:{}}
                var div = document.getElementById(id)
                var h = '<h2 style="color:navy">Cancer Study</h2>'
                x = x.slice(1).map(function(xi,i){
                   xi = xi.split(/\t/)
                   xi = {id:xi[0],name:xi[1],info:xi[2]}
                   listCancers.dt.study[xi.id]={name:xi.name,info:xi.info}
                   h +='<li id="'+xi.id+'">'+xi.id+': '+xi.name+'</li>'
                   return xi                   
                })
                div.innerHTML=h
                // animate listed entries
                x.forEach(function(xi){
                    var li = document.getElementById(xi.id)
                    if(li){
                        li.onmouseover=function(){
                            this.style.color='blue'
                            this.style.backgroundColor='yellow'
                            this.style.cursor='pointer'
                        }
                        li.onmouseleave=function(){
                            this.style.color='black'
                            this.style.backgroundColor=null
                        }
                        li.onclick=function(){
                            console.log('clicked on ',li)
                            var caseList={}
                            cbio.getCaseLists(li.id,function(cc){
                                var parms = cc[0].split(/\t/)
                                var ind = parms[0]
                                parms = parms.slice(1)
                                var cl = cc.slice(1).map(function(ci){
                                    ci = ci.split(/\t/)
                                    caseList[ci[0]]={}
                                    parms.forEach(function(p,i){
                                        //console.log(p)
                                        caseList[ci[0]][p]=ci[i+1]
                                    })
                                })
                                if(!listCancers.dt.study[li.id].caseList){
                                    listCancers.dt.study[li.id].caseList={}
                                }
                                listCancers.dt.study[li.id].caseList=caseList
                            })
                        }
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

