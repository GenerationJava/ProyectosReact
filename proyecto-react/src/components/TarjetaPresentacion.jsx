import React from "react";

//También, podemos desestructurar los props para recibirlos por separado y contar con mayor legibilidad
function TarjetaPresentacion({ avatar, nombre, email }) {
    return (
        <>
        {/** Para llamar al valor de las props lo hacemos a través de llaves **/}
            <div className="tarjeta">
                <img src={avatar} alt={nombre} width="100"/>
                <h2>{nombre}</h2>
                <p>{email}</p>
            </div>
        </>
    );
}

export default TarjetaPresentacion