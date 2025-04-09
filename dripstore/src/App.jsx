import Carrossel from "./Components/Carrossel/Carrossel"
import ColecoesEmDestaque from "./Components/ColecoesEmDestaque/ColecoesEmDestaque"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import OfertaEspecial from "./Components/OfertaEspecial/OfertaEspecial"
import ProdutosEmAlta from "./Components/ProdutosEmAlta/ProdutosEmAlta"

function App() {

  return (
    <>
      <Header/>      
      <Carrossel/>
      <ColecoesEmDestaque/>
      <ProdutosEmAlta/>
      <OfertaEspecial/>
      <Footer/>
    </>
  )
}

export default App
