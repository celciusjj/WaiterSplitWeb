import styled from "styled-components";

export const HeaderBar = styled.header`
    background-color: ${props => props.theme.primaryBlue};
    width: 100%;
    padding: 10px;
    z-index: 100;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    div {
        align-self: center;
    }
`

export const Button = styled.button`
  margin-right: 50px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #000;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
&:hover {
  background-position: right center;
  color: #000;
  text-decoration: none;
}
&:active {
  transform: scale(0.95);
}
`
