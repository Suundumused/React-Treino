import Item from './Item';


function NewList({testeItem3, testeItem4}) {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Renault" cor="DEFAULT"></Item>
                <Item marca="Peugeot"></Item>
            </ul>
        </>
    );
}

export default NewList