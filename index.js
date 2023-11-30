// -_-
let PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];

// Global Declarations
let newPokeGrid = document.querySelector(".pokeGrid");
let filterBoxes = document.querySelectorAll("[name=typeFilter]");
console.log(filterBoxes);

addEventListener("DOMContentLoaded", () => {
  PokedexData.forEach((pokemon) => {
    // Create the Card element and all its accessoriresaasalsfjnaf
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    let newPokeName = document.createElement("h2");
    newPokeName.classList.add("pokeName");
    let newPokeImg = document.createElement("div");
    newPokeImg.classList.add("pokeImg");
    let newType = document.createElement("h3");
    newType.classList.add("typeOf");
    let newWeight = document.createElement("h4");
    newWeight.classList.add("weight");
    let newHeight = document.createElement("h4");
    newHeight.classList.add("height");

    //Appending values to the accessorires
    newPokeName.textContent = pokemon.name;
    newPokeImg.style.backgroundImage = `url(${pokemon.url})`;
    newType.textContent = pokemon.type;
    newWeight.textContent = pokemon.weight;
    newHeight.textContent = pokemon.height;

    // Appending to the Card div
    newCard.append(newPokeName, newPokeImg, newType, newWeight, newHeight);

    // Appending to pokeGrid
    newPokeGrid.appendChild(newCard);
  });
});
