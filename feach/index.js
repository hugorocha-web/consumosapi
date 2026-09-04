let btn = document.querySelector('#mybtn')
btn.addEventListener('click', pokemons)
async function pokemons(){
    try{
        let valor = document.querySelector('#text').value.toLowerCase().trim()
        console.log(valor)
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        if(!pokemon.ok){
            throw new Error(`pokémon não foi encontrado (status : ${pokemon.status})`)
        }
        let infos = await pokemon.json()
        
        let img = document.querySelector('img')
        img.src = infos.sprites.front_default
        img.style.display = 'block'
        console.log(infos.sprites.front_default)









        

    }
    catch(error){
        console.log(error)
    }
}