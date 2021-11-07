import React from 'react';
import {Link} from 'react-router-dom';

function Card( { pokemon } ){
    return(
        <div className="col-4 col-sm-6 col-md-3">
            <div className="card">
                <div className="card-header">
                        <div className="row">
                            <div className="col-3">
                                {pokemon.id}
                            </div>
                            <div className="col-9">
                                {pokemon.name}
                            </div>
                        </div>
                       
                </div>
                <div className="card-body">
                    <div className="row d-flex justify-content-center">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
                    
                    <div className="row d-flex justify-content-center">
                        <div className="row">
                            Type
                        </div>
                        <div className="row">
                            {pokemon.types.map((data, i) => {
                                return(
                                    <div className="col-6">
                                        {data.type.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="card-footer ">

                    <Link to={`pokemon/${pokemon.id}`} class="btn btn-primary">Mais Informações</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;