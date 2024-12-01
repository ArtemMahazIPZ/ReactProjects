import React from "react";
import { useParams } from "react-router-dom";

const Level2 = () => {
    const { id } = useParams();
    return <h2>Рівень 2, ID: {id}</h2>;
};

export default Level2;
