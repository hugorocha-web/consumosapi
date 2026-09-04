async function pegarJson(){
    let resposta = await fetch("pessoas.json")
    let Nreposta = await resposta.json()
    console.log(Nreposta)
}

pegarJson()