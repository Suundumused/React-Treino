import { ItemModel } from "../../../models/ItemModel";

interface ItemsTableWidgetProps {
    list: ItemModel[];
}

export const ItemsTableWidget: React.FunctionComponent<ItemsTableWidgetProps> = ({ list }) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr className="table-success">
                            <th scope="row">{index}</th>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>✏️</td>
                            <td>❌</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}