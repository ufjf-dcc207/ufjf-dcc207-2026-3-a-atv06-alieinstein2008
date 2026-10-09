import { useState } from "react";
import "./atributo.css";

export default function Atributo() {

    const [valor, setValor] = useState<number>(0);
    let coracoes = "";
    for (let i = 0; i < 5; i++) {
        if(i < valor){
            coracoes += "💗"
        }
        else{
            coracoes+= "🩶"
        }
    }

    const incremeta = () => {
        valor < 5 ? setValor(valor + 1) : setValor(0);
    }

    return (
        <div className="atributo">
            {valor}{coracoes}
            <button onClick={incremeta}>+</button>
        </div>
    )
}