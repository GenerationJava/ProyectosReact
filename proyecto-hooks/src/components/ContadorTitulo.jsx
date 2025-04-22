import React, {useState, useEffect} from "react";

export default function ContadorTitulo() {
    //Definimos un estado para contador
    const [contador, setContador] = useState(0);
    
    //El efecto secundario definido en useEffect dependerá del cambio del estado contador
    useEffect(() => {
        //El efecto secundario será la actualización del título del documento
        document.title = `Has hecho click ${contador} veces`;
        console.log("El título se ha actualizado");
    }, [contador]);


    return (
        <>
            <div>
                <p>Contador: {contador}</p>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            </div>
        </>
    )
}