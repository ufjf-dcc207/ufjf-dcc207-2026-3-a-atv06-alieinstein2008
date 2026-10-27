import { useState } from "react";
import "./atributo.css";

type AtributoProps = {
    icone: string;
}
export default function Atributo({ icone }: AtributoProps) {

    const [valor, setValor] = useState<number>(0);

    function atualizaValor(prev: number) {
        if (prev === 5) return 0;
        return prev + 1;
    }

    return (
        <div className="atributo">
            {valor}{icone.repeat(valor)}<span className="inativo">{icone.repeat(5 - valor)}</span>
            <button onClick={() => {
                setValor(atualizaValor);
                setValor(atualizaValor);
            }}>+</button>
        </div >
    )
}