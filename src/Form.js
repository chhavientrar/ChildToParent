import React, { useState } from "react";

const Form = (props) => {
  const [name, setname] = useState("");

  const handleChange = (e) => {
    setname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default Form;
