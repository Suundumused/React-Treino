import { ItemModel } from "../../../models/ItemModel";


interface ItemsTableWidgetProps {
    list: ItemModel[] | undefined;
    editCalled(model: ItemModel | undefined): void;
    deleteCalled(index: number | undefined): void;
}

export const ItemsTableWidget: React.FunctionComponent<ItemsTableWidgetProps> = ({ 
    list,
    editCalled,
    deleteCalled
    }) => 
{
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
                    {list && (
                        list.map((item, _) => (
                            <tr className="table-success">
                                <th scope="row">{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td><button className="btn btn-light" onClick={() => editCalled(item)}>✏️</button></td>
                                <td><button className="btn btn-light" onClick={() => deleteCalled(item.id)}>❌</button></td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </>
    );
}