const textoPesquisa = document.getElementById("text")
const pesquisar =  document.getElementById("pesquisar")
const accordion_item = document.querySelectorAll(".accordion_item");
const pokemonName = document.getElementById("pokemon__name");
const pokemonImg = document.querySelector(".pokemon__img");
const fetchPokemon = async (pokemon) => {
    return  (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()
          
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonImg.src = data.sprites.versions['generation-v']['black-white'].animated.front_default
}

accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector(".accordion_header");
    
    accordion_header_item.addEventListener("click", () => {
        const accordion_content_item = item.querySelector(".accordion_content");
        
        const item_actived = document.querySelector(".active");
        
        VerifyActive(item, accordion_content_item, item_actived);
    });
});

function VerifyActive(item, content, content_actived) {
    const icon_item = item.querySelector(".icon");
    const icon_item_active = document.querySelectorAll(".icon");
    
    icon_item_active.forEach((item) => (item.innerHTML = "+"));
    
    if (content_actived) {
        content_actived.style.height = 0;
        content_actived.classList.remove("active");
    }
    
    if (content !== content_actived) {
        icon_item.innerHTML = "-";
        content.classList.add("active");
        content.style.height = content.scrollHeight + 10 + "px";
  }
}
pesquisar.addEventListener('click' , (e) => {
    e.preventDefault()
    console.log(textoPesquisa.value)
})

renderPokemon('130')