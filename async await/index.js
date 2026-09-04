async function encherLitros(){
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
async function tarefasFeitas() {
    try{
    const enchi = await encherLitros();
    console.log(enchi)

    const comi = await comerCarne();
    console.log(comi)

    const banhei = await banhar();
    console.log(banhei)
    }
    catch{
        console.log('algum erro')

    }
}
tarefasFeitas()