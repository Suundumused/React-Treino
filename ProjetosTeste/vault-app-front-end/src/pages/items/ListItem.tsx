import React, { useEffect, useState, useRef } from 'react';

import { getListItems } from "../../services/itemsService";
import { ItemModel } from '../../models/ItemModel';
import { ItemsTableWidget } from '../../components/public/items/ItemsTableWidget'
import { FloatingAlertBox } from '../../components/public/items/floating/FloatingAlertBox';


export default function ListItem() {
    const initialized = useRef(false);

    const [items, setItems] = useState<ItemModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [alertBoxExists, setAlertBoxExists] = useState(true);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            
            (async () => {
                try{
                    setItems(await getListItems());
                }
                catch (err) {
                    setError(String(err));
                }

                setLoading(false);
            })();
        }
    }, []);

    useEffect(() => {
        if (error) {
            setAlertBoxExists(true);
        }
    }, [error]);

    if (loading) {
        return <FloatingAlertBox 
            title = {"Loading"} 
            message = {"Retrieving items list..."} 
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

    return <ItemsTableWidget list={items}/>;
}