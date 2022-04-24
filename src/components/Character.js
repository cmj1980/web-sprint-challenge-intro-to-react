// Write your Character component here
import React from "react";
import styledComponents from "styled-components";

const Character = props => {
    return (
        <div className="character">
            <h3>{props.info.name}</h3>
            
            

        </div>
    )
}
export default Character;