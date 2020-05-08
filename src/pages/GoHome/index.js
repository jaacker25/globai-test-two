import React from 'react';
import { useHistory } from "react-router-dom"

const GoHome = ()=>{
    let history = useHistory();
    return(<>{history.push('/')}</>);
}
export default GoHome;