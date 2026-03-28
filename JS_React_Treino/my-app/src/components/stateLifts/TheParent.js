import { useState } from "react";
import SeuNome from "./SeuNome";
import Saudacao from "./Saudacao";


function TheParent() {
    const [nome, setNome] = useState();

    return (
        <div>
            <h1>State Lift</h1>
            <SeuNome setNome={setNome}></SeuNome>
            {nome}
            <Saudacao nome={nome}></Saudacao>
        </div>
    );
}

export default TheParent;