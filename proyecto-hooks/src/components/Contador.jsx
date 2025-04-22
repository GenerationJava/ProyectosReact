import { useState } from "react";

export default function Contador() {
    //Para devolver el estado, le damos un valor inicial de 0
    //La función setContador es la que gatillará la renderización del componente cuando el estado se cambie
    const [contador, setContador] = useState(0);

    //Eventos
    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
    const resetear = () => setContador(0);

    return (
        <>
            <div>
                <h2>Contador: {contador}</h2>
                {/** Creamos botones con el evento onClick, que llama a la función que setea el estado **/}
                <button onClick={incrementar}>Incrementar</button>
                {/** Mostrar botones de decremento y reseteo de manera */}
                { contador >= 10 &&
                <div>
                    <button onClick={decrementar}>Decrementar</button>
                    <button onClick={resetear}>Resetear </button>
                </div>
                }  
                {/**<button onClick={resetear}>Resetear</button>*/}
            </div>
        </>
    );
}