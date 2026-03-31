import { useState } from "react";


interface FloatingAlertBoxProps {
    title: string | null,
    message: string | null,
    type?: 
        "alert-warning" | 
        "alert-danger" | 
        "alert-success" | 
        "alert-info" |
        "alert-primary" |
        "alert-secondary" |
        "alert-light",
    existsOverride:boolean,
    setExistsOverride: (state: boolean) => void
}

export const FloatingAlertBox: React.FunctionComponent<FloatingAlertBoxProps> = ({ 
        title, 
        message,
        type = "alert-info",
        existsOverride = true,
        setExistsOverride
     }) => {
    
    const [selfExists, setSelfExists] = useState<boolean>(true);

    function setExists(state: boolean){
        setSelfExists(state);
        setExistsOverride(state);
    }
    
    return (
        selfExists || existsOverride ? (
        <div className="floating-message">
            <div className={"alert alert-dismissible " + type}>
                <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => setExists(false)}></button>
                <h4 className="alert-heading">{title}</h4>
                <p className="mb-0">{message}</p>
            </div>
        </div>) : <></>
    );
}