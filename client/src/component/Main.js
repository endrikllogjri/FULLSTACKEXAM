import { useState } from "react";
import axios from "axios";
import ObjectForm from "./ObjectForm";
import ObjectList from "./ObjectList";

function Main() {
  const [object, setObject] = useState([]);

  const removeFromDom = (objectId) => {
    setObject(object.filter((object) => object._id != objectId));
  };

  return (
    <div>
      <ObjectForm object={object} setObject={setObject} />
      <hr />
      <ObjectList
        object={object}
        setObject={setObject}
        removeFromDom={removeFromDom}
      />
    </div>
  );
}

export default Main;
