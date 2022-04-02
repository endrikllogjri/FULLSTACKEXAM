import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PetList = (props) => {
  const { removeFromDom, pets, setPets } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet")
      .then((res) => {
        console.log(res.data);
        setPets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletePets = (petsId) => {
    axios
      .delete("http://localhost:8000/api/pet/" + petsId)
      .then((res) => {
        removeFromDom(petsId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div  className="shelter">
        <h2>Pet Shelter</h2>
        <h3>These pets are looking for a good home</h3>
        <Link className="edit-link" to="/pet/">
          Add
        </Link>
      </div>
      <div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pets, index) => {
                return (
                  <tr key={index}>
                    <td className="name">
                      <strong>{pets.name}</strong>
                    </td>
                    <td className="name">
                      <strong>{pets.type}</strong>
                    </td>
                    <td>
                      <div className="pet-list">
                        <Link className="edit-link" to={`/pet/edit/${pets._id}`}>
                          Edit
                        </Link>
                        <Link className="edit-link" to={`/pet/${pets._id}`}>
                          Details
                        </Link>
                        <button
                          className="del-btn"
                          onClick={(e) => {
                            deletePets(pets._id);
                          }}
                        >
                          Adopt {pets.name}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PetList;
