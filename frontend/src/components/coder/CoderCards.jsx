import React, {useState, useEffect} from 'react'

import axios from "axios"

import Coder from './CoderCard.jsx';

const Coders =() =>{
    const [coders, setCoders] = useState([])
    const [refreshData, setRefreshData] = useState(false)

    useEffect(() => {
        getAllCoders();
    }, [])

    if(refreshData){
        setRefreshData(false);
        getAllCoders();
    }

    return (
        <>
        {coders != null && coders.map((coder, i) => (
        <Coder coderData={coder} />
        ))}
        </>
    );

    function getAllCoders(){
        var url = "http://localhost:1111/coders";
        axios.get(url, {
            responseType: 'json'
        }).then(response => {
            console.log("Response from the server:", response);
            if (response.status === 200) {
                setCoders(response.data);
            }
        })
    }    
}

export default Coders