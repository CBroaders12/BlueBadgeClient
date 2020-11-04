import React, {useState} from 'react';
import {Button} from 'reactstrap';
import FoodUpdateComponent from './FoodUpdate';

const Log = (props) => {
    const{setModalOpen} = props;
 
    return (
        <>
            <tr>
                <td className="table-foodname">{props.name}</td>
                <td className="table-servings">{props.servings}</td>
                <td className="table-calories">{props.calories}</td>
                <td>
                    <Button color='warning' onClick={() => setModalOpen(true)} className="mx-1">Update</Button>
                    <Button color='danger' onClick={() => props.deleteFood(props.activeId)} className="mx-1">Delete</Button>
                </td>
            </tr>
            <FoodUpdateComponent modalOpen={props.modalOpen}
            setModalOpen={setModalOpen} activeId={props.activeId} token={props.token} isOpen={props.modalOpen} onClosed={() => setModalOpen(false)} fetchFoodTable={props.fetchFoodTable}/>
        </>
    );
};

export default Log;