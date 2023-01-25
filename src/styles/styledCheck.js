import styled from "styled-components";

export const ChecksContainer = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 padding: 100px;
`

export const CheckContainer = styled.div`
  background-color: #fff;
  box-shadow: 2.3px 4.6px 4.6px hsl(0deg 0% 0% / 0.43);
  padding: 50px;
  border-radius: 5px;
  z-index: 0;
  margin: 20px;
  position: relative;
  width: 150px;
`

export const CheckHeader = styled.div`
    background-color: #009BFF;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    p{
        font-size: 14px;
        font-family: Roboto,sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }
`

export const CheckFooter = styled.div`
    background-color: #009BFF;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: Roboto,sans-serif;
    }
    input{
        margin-left: 10px;
        height: 20px;
        width: 20px;
    }
`