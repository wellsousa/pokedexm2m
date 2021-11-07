import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {getAllPokemon, getPokemon} from '../../services/pokemonAPI';

import Card from '../../pokemon/Card/Card'

function Dashboard(){

    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';


    useEffect(() => {
        async function fecthData(){
            let response = await getAllPokemon(baseUrl);
            //console.log(response.results);
            //console.log(response.next)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        } 
        
        fecthData();
    }, [])

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all( data.map(async pokemon => {
          let _pokemonRecord = await getPokemon(pokemon.url)
    
          return _pokemonRecord;
        }))
    
        setPokemonData(_pokemonData);
        console.log(_pokemonData)
      }

    return(
        <div className="row">
            
            {pokemonData.map((pokemon, i) =>{
                return <Card key={i} pokemon={pokemon}/>
            })}

        </div>
    )
}

export default Dashboard;