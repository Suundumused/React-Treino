import { useState } from "react";


function FormTeste() {
    async function cadastrarUsuario(event) {
        event.preventDefault();
        
        console.log("Cadastrou!!!!!");
        console.log(name);

        await sleep(2000);

        setName("teste2214");

    }

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const [name, setName] = useState("Tarantu");

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                        
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Senha"></input>
                </div>
                <div>
                    <input type="submit" value="Enviar"></input>
                </div>
            </form>
        </div>
    );
}

export default FormTeste;