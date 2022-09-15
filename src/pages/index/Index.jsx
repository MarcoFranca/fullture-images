import React from "react";
import logoGoogle from '../../assets/image/Google_2015_logo.svg'
import {Main, Search} from "./IndexStyle";
import {useGlobal} from "../../assets/global/contex/globalState";

export default function Index() {
    const {states, setters} = useGlobal()
    const {input} = states
    const {setInput} = setters

    return (
        <Main >
            <img src={logoGoogle} alt="logo" />
            <Search action="">
                <input type="text" placeholder='procurar imagens' value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <button>Buscar</button>
            </Search>
        </Main>
    )
}