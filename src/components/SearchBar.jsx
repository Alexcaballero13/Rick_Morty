import styles from '../estilo.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const [character, setCharacter] = useState('')

   const handle = (event)=>{
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.SearchBar}>
      <input type='search' className={styles.barra} value={character} onChange={handle}/>
      <button onClick={() => props.onSearch(character)} className={styles.boton2}>Agregar</button>
      </div>
   );
}
