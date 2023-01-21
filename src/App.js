import './App.css'
import Cards from './components/Cards.jsx'
import styles from './estilo.module.css'
import Nav from './components/Nav'
import { useState } from 'react'

function App () {

  const [characters, setCharacters] = useState([])



  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const onClose = (id) =>{
    setCharacters(
      characters.filter(caracter => caracter.id !== id)
    )
  }

  return (
    <div className={styles.App}>
        <Nav onSearch = {onSearch}/>
      <div className={styles.posicioncard}>
        <Cards
          characters={characters}
          onClose = {onClose}
        />
      </div>
    </div>
  )
}

export default App
