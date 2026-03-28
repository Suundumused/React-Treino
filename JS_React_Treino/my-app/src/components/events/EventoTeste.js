function EventoTeste() {
    function meuEvento(){
        console.log("Botão de teste ativado");
    }

    return (
        <div>
            <p>Clique aqui para testar evento button</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}

export default EventoTeste;