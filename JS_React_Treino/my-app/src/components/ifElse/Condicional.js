import { useState } from "react";


function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(event) {
        event.preventDefault();
        setUserEmail(email);

        console.log(userEmail);
    }

    function limparEmail(event) {
        setUserEmail("");
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail: </h2>
            <form>
                <input type="email" placeholder="Digite o email." onChange={(e) => setEmail(e.target.value)}></input>
            </form>
            <button onClick={enviarEmail}>Enviar email</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    );
}

export default Condicional;