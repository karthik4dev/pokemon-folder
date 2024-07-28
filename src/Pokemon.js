import './styles/PokemonStyle.css'
export default function PokemonAPI(){
    const number=Math.floor(Math.random() * 300)+1;
    let url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
    return(<div className="Pokemon">
        <h2>Pokemon {number}</h2><br></br>
        <img src={url} />
        </div>
        );
}