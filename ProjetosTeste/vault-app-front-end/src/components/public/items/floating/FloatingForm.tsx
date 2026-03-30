import { ChangeEvent, useState } from "react";
import { ItemModel } from "../../../../models/ItemModel";


interface FloatingFormProps {
    update?: boolean,
    model?: ItemModel,
    setModel: (model: ItemModel) => void,
    existsOverride:boolean,
    setExistsOverride: (state: boolean) => void,
    submitEvent: (model: ItemModel) => void
}

export const FloatingForm: React.FunctionComponent<FloatingFormProps> = ({
        update = false,
        model,
        setModel,
        existsOverride,
        setExistsOverride,
        submitEvent
    }) => {
    
    const [selfExists, setSelfExists] = useState<boolean>(true);

    const safeModel = model ?? {
        id: undefined,
        nome: "",
        descricao: ""
    };

    const handleInpuIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setModel({
            ...safeModel!,
            id: Number(e.target.value)
        });
    };

    const handleInputNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setModel({
            ...safeModel!,
            nome: e.target.value
        });
    };

    const handleInputDescricaoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setModel({
            ...safeModel!,
            descricao: e.target.value
        });
    };

    function submitOverride(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        submitEvent(safeModel);
    }

    function setExists(state: boolean) {
        setSelfExists(state);
        setExistsOverride(state);
    }

    return (
        selfExists || existsOverride ? (
            <form className="floating-form" onSubmit={(event) => submitOverride(event)}>
                <fieldset>
                    <fieldset>
                        {update && (
                            <>
                                <label className="col-form-label mt-4">Id</label>
                                <input 
                                    type="number"
                                    step={1}
                                    value={safeModel?.id}
                                    onChange={handleInpuIdChange} 
                                    className="form-control" 
                                    placeholder="Id" 
                                    id="inputDefault"/>
                            </>
                        )}
                        <label className="col-form-label mt-4">Name</label>
                        <input 
                            type="text" 
                            value={safeModel?.nome} 
                            onChange={handleInputNomeChange}
                            className="form-control" 
                            placeholder="Name" 
                            id="inputDefault"
                        />

                        <label className="col-form-label mt-4">Description</label>
                        <input 
                            type="text" 
                            value={safeModel?.descricao}
                            onChange={handleInputDescricaoChange}
                            className="form-control" 
                            placeholder="Description"
                            id="inputDefault"
                        />
                    </fieldset>
                    <button type="submit" className="btn btn-primary" id="form-button">Submit</button>
                    <button type="button" className="btn btn-warning" id="form-button" onClick={() => setExists(false)}>Cancel</button>
                </fieldset>
            </form>
        ) : <></>
    );
}