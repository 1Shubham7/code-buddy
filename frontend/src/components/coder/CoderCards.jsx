import React, {useState, useEffect} from 'react'

import axios from "axios"

import Coder from './CoderCard';

const Coders=()=>{
    // const 

    return (
        <>
        <Coder coderData={coder}></Coder>
        </>
    )

    function getAllCoders(){
        var url = "http://localhost/1111/coders"
        axios.get(url, {
            responseType: 'json',
        }).then(response=>{
            if(response.status == 200){
                setEntries(response.data)
            }
        })
        }
    }
}
export default Coders