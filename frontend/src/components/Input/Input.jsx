import React from "react";

const Input = (props) => {
  const { inputType, classStyle, data, setData, label } = props;

  return (
    <div>
      <label>{label}</label>

      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
