import React from 'react'
import { TextField } from '@mui/material'

const PokemonFilter = ({ filter, setFilter }) => {
  <TextField
    sx={{ display: 'flex', flex: '1 0 auto', pb: '1rem' }}
    variant="standard"
    label="Search"
    type="text"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  />
}

export default PokemonFilter