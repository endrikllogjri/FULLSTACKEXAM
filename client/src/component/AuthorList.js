import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AuthorList = (props) => {
  const { removeFromDom, author, setAuthor } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteAuthor = (authorId) => {
    axios
      .delete("http://localhost:8000/api/author/" + authorId)
      .then((res) => {
        removeFromDom(authorId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <h2>Favorite Author</h2>
        <Link className="edit-link" to="/author/">Add</Link>
        <h3>We have quotes by:</h3>
      </div>
      <div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Actions available</th>
              </tr>
            </thead>
            <tbody>
              {author.map((author, index) => {
                return (
                  <tr key={index}>
                    <td className="name">
                      <strong>{author.name}</strong>
                    </td>
                    <td>
                      <div className="author-list">
                        <Link
                          className="edit-link"
                          to={`/author/edit/${author._id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="del-btn"
                          onClick={(e) => {
                            deleteAuthor(author._id);
                          }}
                        >
                          Delete
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
export default AuthorList;
