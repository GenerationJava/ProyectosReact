import './App.css'
import ColorFavorito from './components/ColorFavorito'
import Contador from './components/Contador'
import ListaCompras from './components/ListaCompras/ListaCompras'
import ContadorTitulo from './components/ContadorTitulo'
import DetectorTeclas from './components/DetectorTeclas'

function App() {
  

  return (
    <>
      {/** Ejemplos useState
      <ColorFavorito nombre="Danileo"/>
      <Contador/>
      <ListaCompras/>
      */}
      
      {/** 
      <ContadorTitulo/>
      */}
      <DetectorTeclas/>
    </>
  )
}

export default App
