import { type } from "os";
import styles from "./header.module.css";

type HeaderProps=
  {
    query: string;
    setQuery: (query:string) => void;
  }
export const Header = ({ query, setQuery }:HeaderProps) => {
  
  return (
      <header className={styles.header} >
      <input
        placeholder='Search a Pokémon'
        type='text'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
    </header>
  )
}
export default Header;