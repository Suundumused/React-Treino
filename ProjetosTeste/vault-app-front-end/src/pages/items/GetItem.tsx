import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { editItem, deleteItem, getItemById } from "../../services/itemsService";
import { ItemModel } from '../../models/ItemModel';
import { ItemsTableWidget } from '../../components/public/items/ItemsTableWidget'
import { FloatingAlertBox } from '../../components/public/generic/floating/FloatingAlertBox';
import { FloatingDialogBox } from '../../components/public/generic/floating/FloatingDialogBox';
import { FloatingForm } from '../../components/public/items/floating/FloatingForm';


export default function GetItem() {
    const [initialized, setInitialized] = useState<boolean>(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const [items, setItems] = useState<ItemModel[]>([]);

    const [formExists, setFormExits] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [alertBoxExists, setAlertBoxExists] = useState(true);

    const [editItemModel, setEditItemModel] = useState<ItemModel | undefined>(undefined);
    const [editItemConfirm, setEditItemConfirm] = useState<boolean | undefined>(false);

    const [deleteItemIndex, setDeleteItemIndex] = useState<number | undefined>(undefined);
    const [deleteItemConfirm, setDeleteItemConfirm] = useState<boolean | undefined>(false);

    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
        }
    }, [initialized]);

    useEffect(() => {
        if (id && initialized) {
            console.log(initialized);

            const fetchData = async () => {
                try{
                    setError(null);
                    setItems([await getItemById(Number(id))]);
                }
                catch (err) {
                    setError(String(err));
                }
                setLoading(false);
            }
            fetchData();
        }
    }, [id, initialized]);
    
    useEffect(() => {
        (async () => {
            if (deleteItemConfirm && deleteItemIndex !== undefined) {
                setLoading(true);

                try{
                    setError(null);
                    await deleteItem(deleteItemIndex);
                    navigate('/items/list');
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
        (async () => {
            if (editItemConfirm && editItemModel !== undefined) {
                setLoading(true);

                try {
                    setError(null);
                    await editItem(editItemModel);
                    navigate('/items/list');
                }
                catch (err) {
                    setError(String(err));
                }
            }
            setLoading(false);
            setEditItemModel(undefined);
            setEditItemConfirm(undefined);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editItemConfirm]);

    useEffect(() => {
        if (error) {
            setAlertBoxExists(true);
        }
    }, [error]);

    function cancel() {
    }
    
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
            <FloatingForm
                model={editItemModel}
                setModel={setEditItemModel}
                existsOverride = {formExists}
                setExistsOverride = {setFormExits}
                submitEvent = {setEditItemModel}
                cancelEvent = {cancel}
            />
            <ItemsTableWidget 
                list={items} 
                editCalled={setEditItemModel} 
                deleteCalled={setDeleteItemIndex}
            />
        </div>
    );
}