import React, {useState} from 'react';
import {Button} from 'reactstrap';
import FoodUpdateComponent from './FoodUpdate';

const Log = (props) => {
const{setModalOpen} = props;
    
    
    

 
    return (
        <>
        <table>
            <tbody>
            <tr>
                <td className="table-foodname">{props.name}</td>
                <td className="table-servings">{props.servings}</td>
                <td className="table-calories">{props.calories}</td>
                <td><Button color='warning' onClick={() => setModalOpen(true)}>Update</Button></td>
                <td><Button color='danger' onClick={() => props.deleteFood(props.activeId)}>Delete</Button></td>
            </tr>
            </tbody>
            </table>
            <FoodUpdateComponent modalOpen={props.modalOpen}
          setModalOpen={setModalOpen} activeId={props.activeId} token={props.token} isOpen={props.modalOpen} onClosed={() => setModalOpen(false)} fetchFoodTable={props.fetchFoodTable}/>
        </>
    );
};

export default Log;