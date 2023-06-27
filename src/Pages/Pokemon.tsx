import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./pokemon.module.css";
import { pokemonDetails } from "../types/types";
import fetchPokemon from "../api/fetchPokemon";
import { waitFor } from "../utils/Utils";
import LoadingScreen from "../Components/LoadingScreen";

export const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<pokemonDetails>();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      await waitFor(500);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }

    getPokemon();
  }, [name]);

  if (isLoading || !pokemon) {
    return <LoadingScreen />;
  }

  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img
          className={styles.pokeballImg}
          src="\assets\pokeball.png"
          alt="pokeball"
        />
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
          <div>Nº {pokemon?.id}</div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt=""
            />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>
    </>
  );
};

export default Pokemon;
