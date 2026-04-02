import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LeadRequestForm } from '../../components/forms/partners/LeadRequestForm';
import { LeadRequestFormModel } from '../../models/partner/RequestFormModel';


export default function Partner () {
    const [viewPartnerLeadRequest, setViewPartnerLeadRequest] = useState<boolean>(false);

    const [leadModel, setLeadModel] = useState<LeadRequestFormModel | undefined>(undefined);

    return (
        <>
            <Button variant="info" onClick={() => {setViewPartnerLeadRequest(!viewPartnerLeadRequest)}}>Open lead request</Button>
            { viewPartnerLeadRequest && <LeadRequestForm model={leadModel} setModel={setLeadModel}/> }
        </>
    );
}