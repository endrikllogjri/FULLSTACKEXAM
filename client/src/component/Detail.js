import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";


const Detail = (props) => {
    const [object, setObject] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/object/" + id)
            .then( (res) => {
                console.log(res.data);
                setObject(res.data);
            })
            .catch( (err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <p>Title: {object.title}</p>
            <p>Price: {object.price}</p>
            <p>Descripton: {object.description}</p>
        </div>
    );
}
export default Detail;