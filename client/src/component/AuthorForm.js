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

    axios
      .post("http://localhost:8000/api/author", {
        name,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.errors.name.message);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Link to="/">Go to Home</Link>
      <h1>Name of the Author</h1>
      <p>
        <input
          className="input-add"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </p>
      <button type="button" className="add-btn-c add-btn" >
        <Link to="/">Cancel</Link>
      </button>
      <input className="add-btn" type="submit" />
    </form>
  );
};

export default AuthorForm;
