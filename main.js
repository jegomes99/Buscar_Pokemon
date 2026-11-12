const formulario = document.getElementById("formPoke")

// tradução dos tipos que vêm em inglês da API
const tipos = {
    normal: "Normal", fire: "Fogo", water: "Água", grass: "Planta",
    electric: "Elétrico", ice: "Gelo", fighting: "Lutador", poison: "Veneno",
    ground: "Terra", flying: "Voador", psychic: "Psíquico", bug: "Inseto",
    rock: "Pedra", ghost: "Fantasma", dragon: "Dragão", dark: "Sombrio",
    steel: "Aço", fairy: "Fada"
}


formulario.addEventListener("submit", async function(evento){
    evento.preventDefault();//evitar que a página recarregue

    const id = document.getElementById("idPoke").value
    const msg = document.getElementById("msg")
    const resultado = document.getElementById("resultado")

    msg.textContent = "Buscando..."
    resultado.classList.remove("ativo")

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    // se o ID não existir, a API responde com erro 404
    if (!resposta.ok) {
        msg.textContent = "Pokémon não encontrado!"
        return
    }

    const pokemon = await resposta.json()

    msg.textContent = ""

    // 1 - nome
    document.getElementById("nomePokemon").textContent = pokemon.name;

    // 2 - imagem (usamos a arte oficial, que é maior e fica melhor no card)
    document.getElementById("imgPoke").src = pokemon.sprites.other["official-artwork"].front_default;

    // 3 - experiência base
    document.getElementById("basePoke").textContent = pokemon.base_experience;

    // 4 - altura (a API manda em decímetros, dividimos por 10 para ficar em metros)
    document.getElementById("alturaPoke").textContent = (pokemon.height / 10) + " m";

    // 5 - peso (a API manda em hectogramas, dividimos por 10 para ficar em kg)
    document.getElementById("pesoPoke").textContent = (pokemon.weight / 10) + " kg";

    // extras do card: número, PS (vida) e tipo
    document.getElementById("numPoke").textContent = String(pokemon.id).padStart(4, "0"); // 4 vira 0004
    document.getElementById("psPoke").textContent = pokemon.stats[0].base_stat; // stats[0] é o HP

    const tipo = pokemon.types[0].type.name // ex: "fire"
    document.getElementById("tipoPoke").textContent = tipos[tipo];

    // muda a cor do card de acordo com o tipo (classe "tipo-fire", "tipo-water"...)
    resultado.className = "card tipo-" + tipo

    // som (grito) do pokémon - a API manda o link de um arquivo de áudio
    const som = document.getElementById("somPoke")
    som.src = pokemon.cries.latest;
    som.volume = 0.5; // os sons são altos, deixamos na metade
    som.play(); // toca assim que encontra o pokémon

    resultado.classList.add("ativo")
})


// botão para ouvir o som de novo
document.getElementById("btnSom").addEventListener("click", function(){
    const som = document.getElementById("somPoke")
    som.currentTime = 0; // volta para o começo do som
    som.play();
})