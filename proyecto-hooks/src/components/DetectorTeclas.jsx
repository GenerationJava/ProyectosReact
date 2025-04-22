import React, {useState, useEffect} from "react";

export default function DetectorTeclas() {
    //Inicializar dos estados para el componente
    const [teclaPresionada, setTeclaPresionada] = useState("");
    const [mostrarComponente, setMostrarComponente] = useState(true);

    //Efecto que muestra todo el ciclo de vida del componente
    useEffect(() => {
        console.log("1er Paso, el componente se ha insertado en el DOM");

        //Función que maneja el evento de presionar una tecla y setea el estado de teclaPresionada
        const manejarKeyDown = (e) => {
            console.log("Tecla presionada: ", e.key);
            setTeclaPresionada(e.key);
        }

        //Agregamos un eventListener a la ventana
        window.addEventListener("keydown", manejarKeyDown);

        //Función que indica cuando se desmonta el componente
        return () => {
            console.log("3er Paso, el componente se ha desmontado del DOM");
            window.removeEventListener("keydown", manejarKeyDown);
        }
    }, []);


    return ( 
        <>
            <div>
                <h2>Componente Detector de Teclas, con ciclo de vida</h2>
                {/* Asignamos evento onClick a un botón para evaluar estado mostrarComponente y según su valor, mostrarlo u ocultarlo*/}
                <button onClick={() => setMostrarComponente(!mostrarComponente)}>
                    {mostrarComponente ? "Ocultar componente" : "Mostrar componente"}
                </button>

                {/* Si mostrarComponente es true, mostramos el renderizado del cambio al estado teclaPresionada y si no, mostramos "componente oculto"*/}
                {mostrarComponente ? (
                    <div>
                        <p>Presiona cualquier tecla</p>
                        <div>
                            {teclaPresionada || "Ninguna tecla presionada"}
                        </div>
                        
                    </div>
                ) : (
                    <p>El detector está oculto</p>
                )}
            </div>
        </>
    );
}