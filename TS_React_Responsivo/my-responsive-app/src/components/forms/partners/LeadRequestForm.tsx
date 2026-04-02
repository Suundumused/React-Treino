import Form from 'react-bootstrap/Form';

import { LeadRequestFormModel } from '../../../models/partner/RequestFormModel';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';


interface LeadRequestFormProps {
    model: LeadRequestFormModel | undefined,
    setModel: (model: LeadRequestFormModel | undefined) => void
}

export const LeadRequestForm: React.FunctionComponent<LeadRequestFormProps> = ({
    model,
    setModel
}) => {
    const initialized = useRef(false);
    const [safeModel, setSafeModel] = useState<LeadRequestFormModel>({
                name: "ads",
                email: "",
                message: ""
            });

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            
            console.log("h");

            if (model !== undefined) {
                setSafeModel(model);
            }
        }
    }, []);


    function submitForm(event: React.SubmitEvent<HTMLFormElement>) {        
        event.preventDefault();
        setModel(safeModel);

        console.log(safeModel?.name);
    }

    return (
        <>
            <Form id="unique-floating-form" onSubmit={(event) => submitForm(event)}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={safeModel?.name} onChange={(event) => setSafeModel({...safeModel!, name: event.target.value})} placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={safeModel?.email} onChange={(event) => setSafeModel({...safeModel!, email: event.target.value})} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" value={safeModel?.message} onChange={(event) => setSafeModel({...safeModel!, message: event.target.value})} rows={3} />
                </Form.Group>
                <Button type="submit">Send</Button>
            </Form>
        </>
    );
}