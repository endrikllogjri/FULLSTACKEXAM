import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/" + id)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateAuthor = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/author/" + id, {
        name,
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
      <h1>Update a Author</h1>
      <form onSubmit={updateAuthor}>
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
        {errors.name ? <p>{errors.name.message}</p> : null}
        <button type="button" className="add-btn-c add-btn" >
        <Link to="/">Cancel</Link>
      </button>

        <input className="update-btn" type="submit" />
      </form>
    </div>
  );
};
export default Update;
