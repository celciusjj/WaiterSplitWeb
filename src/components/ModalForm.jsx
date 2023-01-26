import { useState, useContext, useEffect } from "react";
import { ModalItem, ModalContainer, ModalCloseBtn, ModalHeader, ModalBody, ModalConfirmBtn } from "../styles/styledModal";
import { RiCloseLine, } from "react-icons/ri";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Input } from "../styles/styledBase";
import { foodProducts } from "../utils/mocks";
import OrdersContext from "../context/OrdersProvider";
import { useSnackbar } from "react-simple-snackbar";

const Modal = () => {
    const { orders, setOrders, setIsModal, isModal } = useContext(OrdersContext);
    const [openSnackbar] = useSnackbar();
    const [client, setClient] = useState("");
    const [productSelected, setProductSelected] = useState(foodProducts[0]);
    const [products] = useState(foodProducts);
    const [productName, setProductName] = useState(foodProducts[0].name);
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        let newProduct = foodProducts[counter];
        setProductSelected(newProduct);
        setProductName(newProduct.name);
    }, [counter])

    const handleNextProduct = () => {
        if (counter === products.length - 1) {
            setCounter(0);
        } else {
            setCounter(prevCounter => prevCounter + 1);
        }
    }

    const handlePreviousProduct = () => {
        if (counter === 0) {
            setCounter(products.length - 1);
        } else {
            setCounter(prevCounter => prevCounter - 1);
        }
    }

    const onChangeProductInput = (e) => {
        setProductName(e.target.value);
        let productSelected = products.filter(item => (item.name).toLowerCase() === (e.target.value).toLowerCase());
        if (productSelected.length > 0) setProductSelected(productSelected[0]);
    }

    const onClickButton = () => {
        if (client !== "") {
            let dataClient = orders[client];
            let total = productSelected.price;
            if (dataClient) {
                total += dataClient.products.map(item => item.price).reduce((acc, amount) => acc + amount);
            }
            const data = {
                ...orders,
                [client]: {
                    products: dataClient ? [...dataClient.products, productSelected] : [productSelected],
                    total,
                }
            }
            setOrders(data);
            openSnackbar("Producto añadido: " +  productSelected.name);
        } else {
            openSnackbar('Debe ingresar un cliente.')
        }
    }

    const handleCloseModal = () => {
        setClient("");
        setIsModal(false)
    }

    return (
        isModal &&
        <ModalContainer>
            <ModalItem >
                <ModalHeader>
                    <p>Registre el producto</p>
                </ModalHeader>
                <ModalBody>
                    <Input
                        value={productName}
                        onChange={onChangeProductInput}
                        width={"400px"}
                        placeholder="Ingrese el producto a buscar">
                    </Input>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button
                            onClick={handlePreviousProduct}>
                            <IoChevronBackOutline />
                        </button>
                        <img alt="food" src={productSelected.url}></img>
                        <button
                            onClick={handleNextProduct}>
                            <IoChevronForwardOutline />
                        </button>
                    </div>
                    <Input
                        onChange={(e) => setClient(e.target.value.toUpperCase())}
                        width={"400px"}
                        placeholder="Nombres y apellidos del cliente">
                    </Input>
                    <ModalConfirmBtn
                        onClick={onClickButton}>
                        confirmar
                    </ModalConfirmBtn>
                </ModalBody>
                <ModalCloseBtn
                    onClick={handleCloseModal}>
                    <RiCloseLine
                        style={{ marginBottom: "-3px" }} />
                </ModalCloseBtn>
            </ModalItem>
        </ModalContainer >
    );
}

export default Modal;