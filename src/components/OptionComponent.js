import React from "react";

//class OptionComponent changed to Stateless Component
const OptionComponent = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>

    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default OptionComponent;
