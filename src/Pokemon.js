import axios from 'axios'
import './styles/PokemonStyle.css'
import { useState } from 'react';
export default function PokemonAPI(){
    const number=Math.floor(Math.random() * 100)+1;
    const [name,setName]= useState();
    var height;
    var weight;
    let imageUrl=  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
    let altImageurl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
    let url=`https://pokeapi.co/api/v2/pokemon/${number}/`;
    const pokemon=axios.get(url).then((Response)=>{
        let json= JSON.parse(Response.data);
        console.log(json);
    }).catch(function (e)
    {
        console.log(e);
    })

    return(<div className="Pokemon">
        <h2>Pokemon {number}</h2><br></br>
        <img src={imageUrl} alt={altImageurl} />
        <h3>{name}</h3>
        <h3>{height}</h3>
        <h3>{weight}</h3>
        </div>
        );
}