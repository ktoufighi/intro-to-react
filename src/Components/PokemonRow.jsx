import { PropTypes } from 'prop-types'
import { Button } from '@mui/material'


const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td>
      <Button variant="outlined" size="small" onClick={() => onSelect(pokemon)}>
        More info!
      </Button>
    </td>
  </tr>
)

// defining propTypes
PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func.isRequired,
}

export default PokemonRow