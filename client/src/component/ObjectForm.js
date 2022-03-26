import React, { useEffect, useState } from "react";
import axios from "axios";

const ObjectForm = (props) => {
  const { object, setObject } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/object", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTitle("");
        setPrice("");
        setDescription("");
        setObject([...object, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Product Manager</h2>
      <p>
        <label>Title</label>
        <br />

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default ObjectForm;
