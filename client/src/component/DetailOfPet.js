import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,Link} from "react-router-dom";


const DetailOfPEt = (props) => {
    const [pet, setPet] = useState({});
    const [ likes,setLikes] = useState(0);
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + id)
            .then( (res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch( (err) => {
                console.log(err);
            })
    }, [])

   
    return (
      <div>
        <div>
          <h1>Pet Shelter</h1>
          <Link className="edit-link" to="/">
            Go to Home
          </Link>
        </div>
        <div>
          <h3>Details about: {pet.name}</h3>
          <h4>Pet type: {pet.type}</h4>
          <h4>Descripton: {pet.description}</h4>
          <h4>Skill 1: {pet.skill1}</h4>
          <h4>Skill 2: {pet.skill2}</h4>
        </div>
        <div>
          <button className='update-btn' onClick={() => setLikes(likes + 1)}>Like {pet.name}</button>
          <span className='like-number'>{likes} like(s)</span>
        </div>
      </div>
    );
}
export default DetailOfPEt;