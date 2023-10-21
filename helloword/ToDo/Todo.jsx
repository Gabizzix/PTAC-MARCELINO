import { useEffect,useState} from "react"; 
import {Link} from "react-router-dom"; 
import "./style.css";


export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [esmalte, setEsmalte] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [quantidade, setQuantidade] = useState(1);
    const [marca, setMarca] = useState("");
    const [imagem, setImagem] = useState("");

    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista])
    
    const salvar = (e) =>{
        e.preventDefault(); 
        setLista([...lista, { 
          esmalte:esmalte, quantidade:quantidade, marca:marca, imagem:imagem
        }]); 
        
        setEsmalte("")
        setMarca("")
        setImagem("")
        setQuantidade(quantidade + 1)
        console.log(lista)
    };

    
    const remover = (quantidade) => {
        const lista2 = [];
        lista.map((Lista) => {
        if (Lista.quantidade !== quantidade) {
        lista2.push(Lista);
        }
        });
        setLista(lista2);
    }

    return (
        <div class="container">
            <Link to="/">
                <center>Página Principal</center>
            </Link>

            <h1>
                <center>𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐄𝐬𝐦𝐚𝐥𝐭𝐞𝐬!</center>
            </h1>

            <form onSubmit={salvar}>
            <input placeholder="Informe o nome do esmalte que deseja:"
            type="text" 
            value={imagem} onChange={(e)=>{setImagem(e.target.value)}}/>

            <input placeholder="Qual cor de esmalte você deseja?" 
            type="text" 
            value={esmalte} onChange={(e)=>{setEsmalte(e.target.value)}}/>

            <input placeholder="Qual sua preferência de marca do esmalte?" 
            type="text" 
            value={marca} onChange={(e)=>{setMarca(e.target.value)}}/>

        <div>

            <button class="add">Adicionar Esmalte</button>
        </div>    
        </form>

            
            {lista.map((esmal)=>
        <div class="cardd" key={esmal.quantidade}>
        <div class="card">
        <div>

            <img class="imagem" src={esmal.imagem}/>
        </div>
        <div>

            <p class="titulo">{esmal.esmalte}</p>
            <p><span>Marca:</span> {esmal.marca}</p>
        </div>
        </div>
            <center><button class="remove" onClick={() => remover(esmal.quantidade)}>Remover</button></center>
        </div>
        )}
        </div>
    );
}