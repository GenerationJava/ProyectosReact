import { useState } from "react";
import "./compras.css";

//Definimos estilos en línea a través de un objeto Javascript
//Los estilos van en camelCase 
const styles = {
    padding: "8px 15px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer"
};

//Definimos un componente funcional como ListaCompras
export default  function ListaCompras() {
    //Definimos el estado y la función que permite cambiarlo mediante hook useState
    //El estado productos tiene valor inicial como array vacío, setProductos permite cambiar el estado
    const [productos, setProductos] = useState([]);
    //El estado nuevoProducto tiene valor inicial de string vacío y setNuevoProducto permite cambiar el estado
    const [nuevoProducto, setNuevoProducto] = useState("");

    //Creamos una función para agregar producto, que va a recibir un evento
    const agregarProducto = (e) => {
        e.preventDefault();//Prevenimos que ocurra la recarga de la página de manera automática

        if(nuevoProducto.trim() === "") return;//Verificamos que no venga vacío el producto
        
        //Cambiamos el estado de productos
        //Para setear el estado de productos, usamos el spread para crear una copia de los productos
        setProductos([
            ...productos, { id: Date.now(), texto: nuevoProducto, comprado: false }
        ]);

        //Limpiamos el estado de nuevoProducto para que quede vacío de nuevo
        setNuevoProducto("");
    }

    //Creamos una función que intercambia el estado comprado para los productos y usa su id
    const toggleComprado = (id) => {
        setProductos(productos.map((producto) => 
            producto.id === id ? 
            {...producto, comprado: !producto.comprado}
            : producto
            )
        );
    }


    return (
        <>
            <div className="lista-compras">
                <h1>Lista de Compras 🛒</h1>
            {/* Formulario para agregar nuevo producto mediante su nombre*/}
            {/* onSubmit es el evento que va a gatillar el llamado a la función agregarProducto al enviar el formulario */}
            <form onSubmit={agregarProducto}>
                {/*Evento onChange es el responsable de llamar a la función que actualiza el estado de nuevoProducto */}
                <input 
                type="text" 
                value={nuevoProducto} 
                onChange={(e) => setNuevoProducto(e.target.value)}
                placeholder="Agrega tu producto"></input>
                <button type="submit" style={styles}>
                    Añadir
                </button>
            </form>

            {/* Elemento lista para mostrar los productos*/}
            <ul>
                {/* Usamos map para crear una copia de un array original */}
                {/* React necesita que cada item de una lista tenga un Identificador único */}
                {productos.map((producto) =>(
                    <li 
                    key={producto.id} 
                    className={producto.comprado ? "comprado" : ""}
                    onClick={() => toggleComprado(producto.id)}
                    >
                    {producto.texto}
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}