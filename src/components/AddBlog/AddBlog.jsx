import React from "react";

const AddBlog = () => {
  return (
    <div>
      <p>Add series</p>
      <input type="text" placeholder="Enter series name" />
      <input type="text" placeholder="Enter description" />
      <input type="text" placeholder="Enter image Url " />
      <button>Add</button>
    </div>
  );
};

export default AddBlog;
