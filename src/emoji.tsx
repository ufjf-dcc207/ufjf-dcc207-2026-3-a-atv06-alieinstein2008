import { useMemo, useRef, useState } from "react";
import "./emoji.css";
import Atributo from "./atributo";

type EMOJI_KEYS = "happy" | "sick" | "dead";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😁"],
    ["sick", "🤢"],
    ["dead", "😵"]
]);


export default function Emoji() {

    const [status, setStatus] = useState<EMOJI_KEYS>('sick');
    let count = useRef(0);

    function happyClick() {
        console.log("Status: " + status);
        setStatus("happy");
        console.log("Status: " + status);
    }
    function sickClick() {
        console.log("Status: " + status);
        setStatus("sick");
        console.log("Status: " + status);
    }
    function deadClick() {
        console.log("Status: " + status);
        setStatus("dead");
        console.log("Status: " + status);
    }
    function nextClick() {
        switch (status) {
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
            case "dead":
                setStatus("happy");
                break;
            default:
                setStatus("happy");
                break;
        }
    }

    return (
        <>
            <div className="emoji">
                {EMOJI_MAP.get(status) || "❔"}
            </div>
            <Atributo icone="❤️" />
            <Atributo icone="🔋" />
            <Atributo icone="💧" />
            <Atributo icone="🍗" />
            <div className="acoes">
                <button onClick={happyClick}>Happy</button>
                <button onClick={sickClick}>Sick</button>
                <button onClick={deadClick}>Dead</button>
                <button onClick={nextClick}>Ciclo</button>
            </div>

        </>
    )
}