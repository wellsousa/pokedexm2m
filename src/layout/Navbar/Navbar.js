import React, {Component} from 'react';

import logo from './pokedex01.png'

export default class NavBar extends Component{
     render(){
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand d-inline-block align-text-top" href="#">
                        <img src={logo} alt="Pokedex" width="60" height="48" />
                        Pokedex
                    </a>
                    
                    <span class="navbar-text">
                        Uma pokedex feita com empenho para a M2M
                    </span>

                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="nome do pokemon" aria-label="Search"/>
                        <button class="btn btn-primary" type="submit">Pesquisar</button>
                        </form>
                </div>
            </nav>
          );
     }
}