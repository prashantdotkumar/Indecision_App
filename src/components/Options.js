import React from "react";
import OptionComponent from "./OptionComponent";

//Class Options changed to Stateless component
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>

      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please add an option to get started</p>
    )}
    {props.options.map((_option, index) => (
      <OptionComponent
        key={_option}
        optionText={_option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      ></OptionComponent>
    ))}
  </div>
);

export default Options;
