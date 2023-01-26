import { useState } from "react";
import { CheckContainer, CheckHeader, CheckFooter, Line } from "../styles/styledCheck";

const Check = (props) => {
    const [isTip, setIsTip] = useState(false);

    return (
        <CheckContainer >
            <CheckHeader>
                <p>{props.name}</p>
            </CheckHeader>
            <div>
                {props.products.map(item => (
                    <div key={Math.random()}>
                        <p>{item.name} ${item.price}</p>
                    </div>
                ))}
            </div>
            <Line />
            <p>Total: ${props.total}</p>
            {isTip && <p>Total con propina: ${props.total + (props.total * 0.10)}</p>}
            <CheckFooter>
                <p>Añadir propina</p>
                <input onChange={(e) => setIsTip(e.target.checked)} value={isTip} type="checkbox"></input>
            </CheckFooter>
        </CheckContainer>
    );
}

export default Check;