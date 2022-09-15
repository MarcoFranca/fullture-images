import styled from "styled-components";
import {colors} from "../../assets/global/colors";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: solid 1px ${colors.colorGray};
  box-shadow: 0 1px 2px ${colors.colorGray};
  

  @media screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 1rem;
    gap: 1rem;
  }
  
  img{
    width: 7rem;
    @media screen and (min-width: 1024px){
      width: 6rem;
    }
  }
  }
  
  input{
    width: 80%;
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
    @media screen and (min-width: 1024px){
      width: 50%;
    }
  }

  button {
    border: none;
    padding: .5rem 1rem;
    border-radius: .5rem;
    
    :hover {
      background-color: ${colors.colorGray};
      cursor: pointer;
    }
  }
`
