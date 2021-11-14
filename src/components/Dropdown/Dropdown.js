import React from "react";
import {CatalogSelect} from "./Dropdown.styled";

function Dropdown(props) {
    return (
        <CatalogSelect>
            {props.options.map(option =>
                <option key={option.country} value={option.price}>
                    {option.title}</option>)
            }
        </CatalogSelect>
    );
}

export default Dropdown;