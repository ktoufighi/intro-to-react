import React from 'react'
import PokemonRow from './PokemonRow'

const PokemonTable = ({pokemon, filter, setSelectedItem}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '60% 30%',
      gridColumnGap: '1rem',
    }}
  >
  <table width="100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter((pokemon) =>
          pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
        )
        .slice(0, 30)
        .map((pokemon) => (
          <PokemonRow
            pokemon={pokemon}
            key={pokemon.id}
            onSelect={(pokemon) => setSelectedItem(pokemon)}
          />
        ))}
    </tbody>
  </table>
</div>

)

export default PokemonTable
