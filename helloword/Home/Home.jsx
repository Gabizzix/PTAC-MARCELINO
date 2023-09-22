import { useState } from "react"
export default function Home() {

const[name,setName]= useState()

    return(
        <div className="menu">
        
        <ul>

        <li><a href="#home">HOME</a></li>
        <li><a href="#Login">LOGIN</a></li>
        <li><a href="Todo">TODO</a></li>
       

</ul>
        {name}
        {setName}

        <div className="introduction">
        <center><h2>ESMALTERIA DAILUS!</h2></center>
        <center><p> Cadastre-se e aproveite as nossas ofertas!</p></center>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <center><img src="esmalte1.png"/></center>
        
        <br></br>
        <br></br>
        <br></br>
        <center><button><li><a href="Todo">CONFIRA NOSSOS PRODUTOS</a></li></button></center>
      </div> 
  </div>
    );
}