import './style.css'
import { Exemplo } from '/exemplo'
import { Aiai } from '/exemplo'
export default function App() {
  const listaNomes = [
    {nome: "André", idade: "20", cidade: "Nova andradina"},
    {nome: "Amanda", idade: "18", cidade: "Ivinhema"},
    {nome: "Carol", idade: "40", cidade: "Presidente Prudente"}
  ]
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista={listaNomes} />
        <Aiai name ="Gabriela"/>
      </div>
    )
  }