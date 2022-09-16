import React, {useEffect, useState} from "react";
import logoGoogle from '../../assets/image/Google_2015_logo.svg'
import {Main, Search} from "./IndexStyle";
import {useGlobal} from "../../assets/global/contex/globalState";
import {getImg} from "../../assets/apis/req";
import {useNavigate} from "react-router-dom";

export default function Index() {
    const {states, setters} = useGlobal()
    const {input} = states
    const {setInput} = setters
    const {setImages} = setters
    const navigate = useNavigate()
    const [test, setTest] = useState()

    useEffect(()=>{
        setInput("")
    },[])

    const onSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
        getImg(setImages,input)
    }


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