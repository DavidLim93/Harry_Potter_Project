import React from "react";

function Spells (props) {

    return (

        <div className="card">
            <h4> {props.name} </h4>
            <p> {props.description}</p>
        </div>

    )
}

export default Spells;