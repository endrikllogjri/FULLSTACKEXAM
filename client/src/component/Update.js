import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);
  const updatePets = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/pet/" + id, {
        name,
        type,
        description,
        skill1,
        skill2,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        if (err.response.data.message === undefined){
          console.log(err.response)
          setErrors({name: {message: "Name is already used"} });
        }
        else{
        console.log(err);
        setErrors(err.response.data.errors);
      }});
  };
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <h1>Pet Shelter</h1>
      <h3>Edit {name}</h3>
      <form onSubmit={updatePets}>
        <p>
          <input className="update-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          <input className="update-input"
            type="text"
            petType="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </p>
        <p>
          <input className="update-input"
            type="text"
            description="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <p>
          <input className="update-input"
            type="text"
            skill="skill1"
            value={skill1}
            onChange={(e) => {
              setSkill1(e.target.value);
            }}
          />
        </p>
        <p>
          <input className="update-input"
            type="text"
            skill="skill2"
            value={skill2}
            onChange={(e) => {
              setSkill2(e.target.value);
            }}
          />
        </p>
        {errors.name ? <p>{errors.name.message}</p> : null}
        <button type="button" className="add-btn-c add-btn" >
        <Link  to="/">Cancel</Link>
      </button>

        <input className="update-btn" type="submit" value="Edit Pet" />
      </form>
    </div>
  );
};
export default Update;
