import { useState } from "react";
import axios from "axios";
import AuthorList from "./AuthorList";

function Main() {
  const [author, setAuthor] = useState([]);

  
  const removeFromDom = (authorId) => {
    setAuthor(author.filter((author) => author._id != authorId));
  };

  return (
    <div>
      <AuthorList
        author={author}
        setAuthor={setAuthor}
        removeFromDom={removeFromDom}
      />
    </div>
  );
}

export default Main;
