import { useState, useEffect } from 'react'
import { Box, TextField } from '@mui/material'

import PokemonInfo from './Components/PokemonInfo'
import PokemonTable from './Components/PokemonTable'

import "./App.css"

function App() {
  const [ filter, setFilter ] = useState("")
  const [ selectedItem, setSelectedItem ] = useState(null)
  const [ pokemon, setPokemon ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/intro-to-react/pokemon.json')
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, []) //only need to run once on page load no dependency arr

  return (
    <Box
      component="form"
      style={{
        margin: 'auto',
        paddingTop: '1rem',
        width: 800,
      }}
    >
      <h1> Pokemon Search </h1>
      
      <TextField
        sx={{ display: 'flex', flex: '1 0 auto', pb: '1rem' }}
        variant="standard"
        label="Search"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <PokemonTable
        filter={filter}
        pokemon={pokemon}
        setSelectedItem={setSelectedItem}
      />

      <div>{selectedItem && <PokemonInfo {...selectedItem} />}</div>
    </Box>
  )
}

export default App;