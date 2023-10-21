import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div id="container">
            <h2><center>𝐏𝐚́𝐠𝐢𝐧𝐚 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥</center></h2>
            <center><img src="esmalte1.png" class="rounded mx-auto d-block" alt="..."></img></center>
            <Link to="/lista"><center>LISTA DE ESMALTES!</center></Link>
            
        </div>
    );
}