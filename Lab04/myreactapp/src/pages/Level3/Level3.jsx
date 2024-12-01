import React from "react";
import { useParams } from "react-router-dom";

const Level3 = () => {
    const { id, subId } = useParams();
    return <h2>Рівень 3, ID: {id}, SubID: {subId}</h2>;
};

export default Level3;
