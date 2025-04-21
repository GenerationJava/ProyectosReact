import React from "react";


function ListaPersonas({ personas }) {
    return (
        <div className="listaPersonas">
            <h2>Listado de personas</h2>
            {/**Debemos iterar sobre el Array de Personas, pero lo hacemos mediante un duplicado usando .map()*/}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {personas.map((persona) => (
                    <li key={persona.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "15px",
                            margin: "15px 0px",
                            backgroundColor: "#f9f9f9"
                        }}
                    > {/**Ahora desestructuramos los datos de la persona */}
                        <h3>{persona.nombre}</h3>
                        <p>
                            <strong>Ocupación:</strong>{persona.ocupacion}
                        </p>
                        <p>
                            <strong>Ciudad:</strong>{persona.ciudad}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaPersonas;