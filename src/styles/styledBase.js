import styled from "styled-components";



export const Input = styled.input`
  background-color: #B4D4FF;
  border-radius: 10px;
  border-width: 0px;
  font-weight: bold;
  color: black;
  height: 40px;
  width: ${props => props.width};
  padding-left: 20px;
  font-family: Roboto,sans-serif;
  text-transform: uppercase;
  &:focus {
    outline-color: #64A5FF;
  }
  &::placeholder {
    color: black;
    font-weight: normal;
  }
`