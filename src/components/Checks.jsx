import { useContext } from 'react';
import OrdersContext from '../context/OrdersProvider';
import Check from "../components/Check";
import { ChecksContainer } from "../styles/styledCheck";

const Checks = () => {
    const { orders } = useContext(OrdersContext);
    return (
        <div>
            <h5>Pedidos por persona</h5>
            <ChecksContainer>
                {
                    Object.keys(orders).map(item => (
                        <Check
                            key={item}
                            products={orders[item].products}
                            name={item}
                            total={orders[item].total}
                        />
                    ))
                }
            </ChecksContainer>
        </div>
    );
}

export default Checks;