import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const {name} = useParams();

    const dog = dogs.find(d => d.name.toLowerCase() === name);

    return(
        <div>
            <h3>{dog.name}, {dog.age} Years Old</h3>
        </div>
    )
}


export default DogDetails;