import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom"

export default function ToDo() {
  const [esmalte, setEsmalte] = useState("");
  const [preco, setPreco] = useState("");
  const [cd, setCd] = useState(1);
  const [lista, setLista] = useState([]);

  const adicionarEsmalte = (e) => {
    e.preventDefault();
    setLista([...lista, {
        esmalte: esmalte,
        preco: preco,
        cd: cd,
      },
    ]);

    setEsmalte(esmal + 1);
    setPreco(preco + 1);
    setCd(cd + 1);
  }

  const removerEsmalte = (cd) => {
    const listaNova = lista.filter((esmal) => esmal.cd !== cd);
    setLista(listaNova);
  };

return (
  
    <div className="menu">
      
      <ul>

    <li><a href="/home">HOME</a></li>
    <li><a href="#Login">LOGIN</a></li>
    <li><a href="Todo">TODO</a></li>


      </ul><br></br>

    <h1><center> LISTA DE ESMALTES </center></h1>
    
    <form onSubmit={adicionarEsmalte}><h4>

    {" "} Nome: {" "}

    <imput value={esmalte} onChange={(e) => setEsmalte(e.target.value)} />
    </h4>

    <h4>
    {" "} Preço{" "}
      <imput
      type="number"
      value={preco}
      onChange={(e) => setPreco(e.target.value)}/></h4>
      <button>
        
    <i>ADICIONAR ESMALTES</i>
    </button>

    </form>
    {lista.map((esmal) => (
    <div className="esmaltes" key={esmal.cd}>
    <p>
    {" "}
    Nome: {esmal.esmal}, Preço: {esmal.esmal}, Código: {esmal.cd}
    </p>

    <button onClick={() => removerEsmalte(esmal.cd)}>

    <i>REMOVER</i>
    </button>

    </div>
    ))}
  </div>
);

}