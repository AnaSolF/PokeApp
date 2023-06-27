import React, { useEffect } from "react";
import { Header } from "../Components/Header";
import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import styles from "./pokemons.module.css"
import fetchPokemons from "../api/fetchPokemons";
import LoadingScreen from "../Components/LoadingScreen";
import { waitFor } from "../utils/Utils";
import {pokemon} from "../types/types"

export const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {

    const fetchAllPokemons = async () => {
      setIsLoading(true)
      await waitFor(1000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false)
    }
    fetchAllPokemons()
  }, [])

  if (isLoading || !pokemons) {
    return <LoadingScreen />
  }

  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon:any) => { return pokemon.name.toLowerCase().match(query.toLowerCase()) });
;//FiltroBuscador

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={styles.nav}>
         
          {filteredPokemons?.slice(0, 151).map((pokemon: any) => (
  
           <Link key={pokemon.id} className={styles.listItems} to={ `/pokemons/${pokemon.name}`}>

              <img className={styles.listItemIcon}
                src={pokemon.imgSrc}></img>
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span><br />
                <span>{pokemon.id}</span>
              </div>
            </Link >
            
            ))}  
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
