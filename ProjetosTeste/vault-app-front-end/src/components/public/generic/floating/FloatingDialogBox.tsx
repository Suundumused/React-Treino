interface FloatingDialogBoxProps {
    title: string,
    message: string,
    publicExists: boolean,
    setStateSelected: (state: boolean) => void
}

export const FloatingDialogBox: React.FunctionComponent<FloatingDialogBoxProps> = ({
        title,
        message,
        publicExists,
        setStateSelected
    }) => {
    
    return (
        publicExists ? (
            <div className="floating-form">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setStateSelected(false)} aria-label="Close">
                        <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="customButton" className="btn btn-primary" onClick={() => setStateSelected(true)}>Yes</button>
                        <button type="button" id="customButton" className="btn btn-secondary" onClick={() => setStateSelected(false)} data-bs-dismiss="modal">No</button>
                    </div>
                    </div>
                </div>
            </div>
        ) : <></>
    );
}