import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PetForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescripton] = useState("");
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name.length) {
      setErrors({name: { message: 'Name is mandatory'}});
    } else {
      axios
      .post("http://localhost:8000/api/pet", {
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
          if (err.response.data.errors === undefined){
            setErrors({name: {message: "Name is already used"} });
          }
          else{
          console.log(err.response.data.errors.name.message);
          setErrors(err.response.data.errors);
        }});
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Link className="edit-link" to="/">Go to Home</Link>
      <h1>Name of Pet</h1>
      <p>
        <input
          className={`input-add ${!name.length ? 'invalid' : ''}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </p>
      <p>
        <input
          className={`input-add ${!type.length ? 'invalid' : ''}`}
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </p>
      <p>
        <input
          className={`input-add ${!description.length ? 'invalid' : ''}`}
          type="text"
          value={description}
          onChange={(e) => setDescripton(e.target.value)}
        />
      </p>
      <p>
        <input
          className={`input-add ${!skill1.length ? 'invalid' : ''}`}
          type="text"
          value={skill1}
          onChange={(e) => setSkill1(e.target.value)}
        />
      </p>
      <p>
        <input
          className={`input-add ${skill2.length ? 'invalid' : ''}`}
          type="text"
          value={skill2}
          onChange={(e) => setSkill2(e.target.value)}
        />
      </p>
      <button type="button" className="add-btn-c" >
        <Link to="/">Cancel</Link>
      </button>
      <input className="add-btn" type="submit" />
    </form>
  );
};

export default PetForm;
