import React, { useEffect, useState, useRef } from 'react';

import { getListItems, deleteItem } from "../../services/itemsService";
import { ItemModel } from '../../models/ItemModel';
import { ItemsTableWidget } from '../../components/public/items/ItemsTableWidget'
import { FloatingAlertBox } from '../../components/public/generic/floating/FloatingAlertBox';
import { FloatingDialogBox } from '../../components/public/generic/floating/FloatingDialogBox';


export default function ListItem() {
    const initialized = useRef(false);

    const [items, setItems] = useState<ItemModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [alertBoxExists, setAlertBoxExists] = useState(true);

    const [editItemModel, setEditItemModel] = useState<ItemModel | undefined>(undefined);
    const [editItemConfirm, setEditItemConfirm] = useState<boolean | undefined>(false);

    const [deleteItemIndex, setDeleteItemIndex] = useState<number | undefined>(undefined);
    const [deleteItemConfirm, setDeleteItemConfirm] = useState<boolean | undefined>(false);
    
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
        (async () => {
            if (deleteItemConfirm && deleteItemIndex !== undefined) {
                setLoading(true);

                try{
                    setError(null);
                    await deleteItem(deleteItemIndex);
                    setItems(await getListItems());
                }
                catch (err) {
                    setError(String(err));
                }
            }
            setLoading(false);
            setDeleteItemIndex(undefined);
            setDeleteItemConfirm(undefined);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteItemConfirm]);

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

    return (
        <div>
            <FloatingDialogBox
                title = {`Delete item ${deleteItemIndex} ?`}
                message = 'This action can not be undone.'
                publicExists = {deleteItemIndex !== undefined}
                setStateSelected = {setDeleteItemConfirm}
            />
            <ItemsTableWidget list={items} editCalled={setEditItemModel} deleteCalled={setDeleteItemIndex}/>
        </div>
    );
}