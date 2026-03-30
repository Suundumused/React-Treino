import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { delay } from '../../hooks/time/delay';

import { addItem } from "../../services/itemsService";
import { ItemModel } from '../../models/ItemModel';
import { FloatingAlertBox } from '../../components/public/items/floating/FloatingAlertBox';
import { FloatingForm } from '../../components/public/items/floating/FloatingForm';


export default function AddItem() {
    const initialized = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
        }
    }, []);

    const [model, setModel] = useState<ItemModel>();
    const [formExists, setFormExits] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [alertBoxExists, setAlertBoxExists] = useState(true);

    function submit(model: ItemModel) {
        (async () => {
            setLoading(true);

            try{
                await addItem(model);
                navigate('/items/list');
            }
            catch (err) {
                setError(String(err));
            }

            setLoading(false);
        })();
    }

    useEffect(() => {
        if (error) {
            setAlertBoxExists(true);
            
            (async () => {
                await delay(3000);

                setError(null);
                setModel(undefined);
            })();
        }
    }, [error]);

    if (loading) {
        return <FloatingAlertBox 
            title = {"Loading"} 
            message = {"Sending data..."} 
            type = {"alert-danger"}
            existsOverride = {alertBoxExists}
            setExistsOverride = {setAlertBoxExists}/>;
    }
    else if (error) {
        return <FloatingAlertBox 
            title = {"Error"} 
            message = {error} 
            type = {"alert-warning"}
            existsOverride = {alertBoxExists}
            setExistsOverride={setAlertBoxExists}/>;
    }

    return (
        <>
            <FloatingForm
                model={model!}
                setModel={setModel}
                existsOverride = {formExists}
                setExistsOverride = {setFormExits}
                submitEvent = {submit}
            />
        </>
    );
}