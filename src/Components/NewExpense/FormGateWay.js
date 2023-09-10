import React, { useState } from "react";
import NewExpense from "./NewExpense";
import './UI/FormGateWay.css';

const FormGateWay = () =>{
    

    const FormGatWayHandler = () =>{

        

    }

    return (
        <div className="form-gate-way-body">
            <div className="gatway-button">
            <button onClick={FormGatWayHandler} className = "form-gate-way-body-button"> Add New Expnse </button>
            </div>
        </div>

    );

}

export default FormGateWay;