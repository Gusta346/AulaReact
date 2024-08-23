
import Aluno from "./components/Aluno";
import Dados from "./components/Dados";
import HelloWorld from "./components/HelloWorld";
import Contador from "./components/Contador"

export default function App() {


  return (
    <>
      <HelloWorld/>
      <Aluno nome="Oliveira" email="gustavo@gmail.com"/>
      <Dados nivel="Admin" nome="Huguinho" senha = "123456"/>
      <Contador/>


    </>
  )
}


