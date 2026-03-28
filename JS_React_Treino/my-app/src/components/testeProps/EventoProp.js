import MyButton from "./MyButton";


function EventoProp() {
    function meuEvento(){
        console.log("Eita, Botão de teste ativado");
    }

    return (
        <div>
            <p>Clique aqui para testar evento novo button</p>
            <button onClick={meuEvento}>Ativar!</button>
            <MyButton event={meuEvento} text="Primeiro Evento"></MyButton>
            <p>adsa</p>
        </div>
    );
}

export default EventoProp;