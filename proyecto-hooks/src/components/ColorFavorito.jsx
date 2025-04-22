import { useState } from "react";

export default function ColorFavorito(props) {
  const [color, setColor] = useState("rojo");
  const [numeroFavorito, setNumeroFavorito] = useState(1);


  return (
    <>
      <h1>Mi color favorito es {color}!</h1>
      <p>La persona es {props.nombre}</p>
      <button
        type="button"
        onClick={() => setColor("azul")}
      >Azul</button>
      <button
        type="button"
        onClick={() => setColor("rojo")}
      >Rojo</button>
      <button
        type="button"
        onClick={() => setColor("rosa")}
      >Rosa</button>
      <button
        type="button"
        onClick={() => setColor("verde")}
      >Verde</button>
    </>
  );
}