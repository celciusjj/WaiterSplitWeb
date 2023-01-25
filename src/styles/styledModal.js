import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

export const ModalItem = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 460px;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  padding: 30px;

`

export const ModalBody = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 160px;
        width: 160px;
        margin: 20px;
        border-radius: 20px;
    }

    button {
        &:nth-child(1) {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        font-size: 30px;
        }
        &:nth-child(3) {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        font-size: 30px;
        }
    }
`

export const ModalCloseBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
  touch-action: manipulation;
  &:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #000;
  text-decoration: none;
}
&:active {
  transform: scale(0.95);
}
`


export const ModalConfirmBtn = styled.button`
  margin: 20px;
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
  /* change the direction of the change here */
  color: #000;
  text-decoration: none;
}

&:active {
  transform: scale(0.95);
}
`

export const ModalHeader = styled.div`
    background: white;
    p {
        color: #2c3e50;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
    }
`
