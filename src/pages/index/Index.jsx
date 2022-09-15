import React from "react";
import logoGoogle from '../../assets/image/Google_2015_logo.svg'
import {Main, Search} from "./IndexStyle";

export default function Index() {
    return (
        <Main >
            <img src={logoGoogle} alt="logo" />
            <Search action="">
                <input type="text" placeholder='procurar imagens' />
                <button>Buscar</button>
            </Search>
        </Main>
    )
}