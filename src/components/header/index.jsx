import React from "react";
import './Header.css'
import logoGoogle from '../../assets/image/Google_2015_logo.svg'

export default function Header() {
    return (
        <nav>
            <img src={logoGoogle} alt="logo"/>
            <input type="text" placeholder="procurar imagens"/>
            <button>Buscar</button>
        </nav>
    )
}