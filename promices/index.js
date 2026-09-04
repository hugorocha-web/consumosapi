function encherLitros(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            
            const enchioslitros = true
            if(enchioslitros){
                resolve('consegui encher os litros')
            }
            else{
                reject('não enchi os litros')
            }
        }, 1500)       

    })


}
function comerCarne(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const comiCarne = true
            if(comiCarne){
                resolve('comi carne')
            }
            else{
                reject('não comi carne')
            }
        }, 3000)       

    })


}
function banhar(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const tomeibanho = false
            if(tomeibanho){
                resolve('já banhei')
            }
            else{
                reject('não banhei ainda')
            }
        }, 1000)       

    })


}
encherLitros().then(value => {console.log(value)
    return comerCarne().then(value => {console.log(value)
        return banhar().then(value => {console.log(value)
            console.log('finalizei as tarefas')
        }).catch(value=>console.log(value))
    }).catch(value=>console.log(value))
}).catch(value=>console.log(value))