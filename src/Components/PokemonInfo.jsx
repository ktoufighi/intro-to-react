import { PropTypes } from 'prop-types'

const PokemonInfo = ({ name, base }) => (
  <div>
    <h2>{name.japanese}</h2>
    <table>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td style={{ paddingRight: '30px' }}>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
    </table>
  </div>
)

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'Sp. Attack': PropTypes.number.isRequired,
    'Sp. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
}

export default PokemonInfo
