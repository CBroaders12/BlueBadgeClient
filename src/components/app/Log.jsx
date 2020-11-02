import React from 'react';
import {Button} from 'reactstrap';

const Log = (props) => {
 
    return (
        <>
            <tr>
                <td className="table-foodname">{props.name}</td>
                <td className="table-servings">{props.servings}</td>
                <td className="table-calories">{props.calories}</td>
                {/* <td><Button onClick={FoodUpdateModal??}>Update</Button></td>
                <td><Button onClick={deleteFood}>Delete</Button></td> */}
            </tr> 
        </>
    );
};

export default Log;