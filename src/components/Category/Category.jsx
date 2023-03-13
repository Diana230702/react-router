import React, { useEffect, useState } from "react";

const Category = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const [inputVal, setInputValue] = useState("");

  const elems = ["All", "horror", "detective", "melodrama", "Mystic", "Action"];

  return (
    <div>
      <div className="container mt-3 mb-3 d-flex justify-content-between">
        {elems.map((elem, i) => (
          <span
            onClick={() => setSelectedTag(elem)}
            className={selectedTag === elem ? "btn btn-dark" : "btn btn-light"}
            key={i}
          >
            {elem}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Category;
