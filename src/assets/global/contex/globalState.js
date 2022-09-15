import {createContext, useContext, useState} from "react";

export const InputContex = createContext({})

export const InputProvider = (props) => {
    // valor do input a ser capturado
    const [input, setInput] = useState("")
    // imagens a serem capturadas do api
    const [images, setImages] = useState("")
    //variaveis capturando os valores dos hooks
    let states = {input, images}
    let setters = {setInput, setImages}

    return(
        <InputContex.Provider value={{states, setters}}>
            {props.children}
        </InputContex.Provider>
  )
}

export const useGlobal = () => useContext(InputContex)
