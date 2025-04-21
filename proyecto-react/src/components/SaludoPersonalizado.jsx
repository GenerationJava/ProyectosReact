//Para crear un nuevo componente, importamos react
import React from "react";

//props es un objeto que permite a los componentes recibir información
function SaludoPersonalizado(props) {
    return(
        <>
            <div>
                <h1>Hola, {props.nombre}</h1>
                <p>Tienes {props.edad} años.</p>
            </div>
        </>
    );
}

export default SaludoPersonalizado