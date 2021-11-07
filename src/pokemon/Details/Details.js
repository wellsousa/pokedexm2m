
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

import {getPokemon, getAllPokemon} from '../../services/pokemonAPI';

function Details(){

    const {id} = useParams();

    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


    const poke = {
        urlImg: '',
    }

    useEffect(() => {
        async function fecthData(){
            
            let response = await getPokemon(baseUrl + id);
            //console.log(response.results);
            //console.log(response.next)
            //setNextUrl(response.next);
           // setPrevUrl(response.previous);
            //await loadingPokemon(response.results);
            
            setPokemonData(response);

            poke.urlImg = response.sprites.front_default;

            setLoading(false);


        } 
        
        fecthData();
    }, [])

    console.log(poke.urlImg)
    return(
        
        <div className="row">
            <div className="row">
                <h2>{pokemonData.name}</h2>
                
  

                            
            </div>  
            <div className="row">

                <div className="col-6">
                <img src="" alt=""/>
                </div>
                <div className="col-6">

                </div>
            </div>

            <div className="row">
                <p>Altura: {pokemonData.height}</p>

            </div>
        </div>
    )
}

export default Details;