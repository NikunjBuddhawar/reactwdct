import React from "react";
import Styles from "./Mycomponent.module.css";

function CreateArea(props) {
    return (
        <div className={Styles.one}>
            <input onChange={props.handleChange} type="text" placeholder="Enter Task" value={props.text} />
            <button onClick={props.handleClick} >Submit</button>
        </div>
    );
}

export default CreateArea;
