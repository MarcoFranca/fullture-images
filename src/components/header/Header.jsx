import React from "react";
import logoGoogle from '../../assets/image/Google_2015_logo.svg'
import {Nav} from "./HeaderStyle";
import {useGlobal} from "../../assets/global/contex/globalState";

export default function Header() {
    const {states, setters} = useGlobal()
    const {input} = states
    const {images} = states
    const {setInput} = setters
    const {setImages} = setters
    return (
        <Nav>
            <img src={logoGoogle} alt="logo"/>
            <input type="text" placeholder="procurar imagens" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button>Buscar</button>
        </Nav>
    )
}