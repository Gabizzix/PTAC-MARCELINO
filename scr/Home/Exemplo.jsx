
export function Exemplo({lista}){
    return(
        <div>
           {lista.map((aluno,index)=>(
            <ul key = {index}>
                <li>{aluno.nome}, {aluno.idade} anos , Mora em {aluno.cidade}</li>
            </ul>
           ))}

        </div>
    )
}

export function g({name}){
    return(
        <div>

            <p>Desenvolvido por:{name}</p>

        </div>
    )
}