import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
  const { id } = useParams();
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/object/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateObject = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/object/" + id, {
        title, 
        price,
        description, 
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update a Object</h1>
      <form onSubmit={updateObject}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Update;
