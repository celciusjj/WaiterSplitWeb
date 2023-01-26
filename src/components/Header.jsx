import { useContext } from "react";
import { HeaderBar, Button } from "../styles/styledHeader";
import OrdersContext from "../context/OrdersProvider";

const Header = () => {
    const { setIsModal } = useContext(OrdersContext);
    return (
        <HeaderBar>
            <div>
                <Button
                    onClick={() => setIsModal(true)}>
                    Agregar producto
                </Button>
            </div>
        </HeaderBar>
    );
}

export default Header;