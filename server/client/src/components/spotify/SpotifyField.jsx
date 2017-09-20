import React from "react";

// props
export default ({ input, label, placeholder }) => {
  console.log(input);
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} {...input} />
    </div>
  );
};
