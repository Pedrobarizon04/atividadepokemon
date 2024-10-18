class Pokemon {
    constructor(id, nome, tipo, altura, peso, nivelDePoder) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
        this.nivelDePoder = nivelDePoder;
    }
}

// Lista inicial de Pokémons
let pokemons = [
    new Pokemon(1, 'Bulbasaur', 'Vegetal/Veneno', 0.7, 6.9, 45),
    new Pokemon(2, 'Squirtle', 'Água', 0.5, 9.0, 44),
    new Pokemon(3, 'Charmander', 'Fogo', 0.6, 8.5, 39)
];

// Função para obter todos os Pokémons
const getPokemons = () => {
    return pokemons;
};

// Função para obter um Pokémon pelo ID
const getPokemonById = (id) => {
    return pokemons.find(pokemon => pokemon.id === id);
};

// Função para criar um novo Pokémon
const createPokemon = (nome, tipo, altura, peso, nivelDePoder) => {
    const novoPokemon = new Pokemon(pokemons.length + 1, nome, tipo, altura, peso, nivelDePoder);
    pokemons.push(novoPokemon);
    return novoPokemon;
};

module.exports = {
    getPokemons,
    getPokemonById,
    createPokemon
};
