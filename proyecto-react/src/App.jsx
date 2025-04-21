import './App.css'
//importamos saludoPersonalizado para poder utizar el componente en este componente App
import SaludoPersonalizado from './components/SaludoPersonalizado';
import TarjetaPresentacion from './components/TarjetaPresentacion';
import ListaPersonas from './components/ListaPersonas';
import personas from "./components/datosPersonas";


//Componente secundario que retorna un párrafo
function Saludo() {
  return (
    <div>
      <h2>Bienvenido a la página</h2>
      <p>Este es el primer componente funcional que creamos</p>
      
    </div>
  );
}

//Componentes funcionales hijos de App, que es el componente principal
function Despedida() {
  return (
    <>
      <h2>Esta es la despedida</h2>
      <p>Hasta luego</p>
    </>
  );
}

//El componente App es el componente principal de nuestro proyecto
function App() {
  //Sólo podemos retornar un elemento a la vez, es una regla de JSX
  return (
    <>
      {/**Esto es un comentario dentro de JSX */}
      <div>
        {/* <h1>Hola, soy un texto dentro del componente App</h1>
        <Saludo/>
        <Despedida/>
        <SaludoPersonalizado nombre="Woodleine" edad={30}/>
        <TarjetaPresentacion 
          avatar="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          nombre="Danileo"
          email="danileo@mail.com"
        /> */}
        <ListaPersonas personas={personas}/>
      </div>      
    </>
  )
}

export default App
