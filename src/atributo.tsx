import { useState } from "react";
import "./atributo.css";

export default function Atributo({ icone }: { icone: string }) {

    const [valor, setValor] = useState<number>(0);

    const incremeta = () => {
        valor < 5 ? setValor(valor + 1) : setValor(0);
    }

    return (
        <div className="atributo">
            {valor}{icone.repeat(valor)}
            <span className="inativo">
                {icone.repeat(5-valor)}
            </span>
            <button onClick={incremeta}>+</button>
        </div>
    )
}