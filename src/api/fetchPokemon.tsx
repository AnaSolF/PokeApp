import { pokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/Utils";

export default async function fetchPokemon(name: string):Promise<pokemonDetails> {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name.toLowerCase())}`)
    
    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
    }
    
    const results = await response.json();
    const pokemon = {
        name: results.name,
        id: results.id,
        imgSrc: results.sprites.front_default,
        hp: results.stats[0].base_stat,
        attack: results.stats[1].base_stat,
        defense: results.stats[2].base_stat,
        
    }
    return pokemon;
}