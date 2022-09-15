import styled from "styled-components";
import {colors} from "../../assets/global/colors";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  img{
    width: 15rem;
  }
`

export const Search = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
  input{
    width: 20rem;
    border-radius: .85rem;
    border: solid 1px ${colors.colorGray};
    padding: .5rem;
    margin: 1rem 0;
    :hover{
      box-shadow: rgba(0,0,0,0.24) 0 3px 8px ;
    }
    :focus{
      outline: 0;
    }
  }

  button{
    border: none;
    padding: .5rem;
    border-radius: .5rem;
    :hover{
      background-color: ${colors.colorGray};
      cursor: pointer;
    }
  }
`
