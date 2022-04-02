import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthorForm = (props) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name.length) {
      setErrors({name: { message: 'Name is mandatory'}});
    } else {
      axios
      .post("http://localhost:8000/api/author", {
          name,
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
      <h1>Name of the Author</h1>
      <p>
        <input
          className={`input-add ${!name.length ? 'invalid' : ''}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </p>
      <button type="button" className="add-btn-c" >
        <Link to="/">Cancel</Link>
      </button>
      <input className="add-btn" type="submit" />
    </form>
  );
};

export default AuthorForm;
