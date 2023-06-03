import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  const className = ["btn"];

  if (props.isPrimary) className.push("btn-primary");
  if (props.isDanger) className.push("btn-danger");
  if (props.isInfo) className.push("btn-info");
  if (props.isSmall) className.push("btn-sm");
  if (props.isMedium) className.push("btn-md");
  if (props.isLarge) className.push("btn-lg");

  return (
    <button type={props.type} className={className.join(" ")}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  isPrimary: propTypes.bool,
  isDanger: propTypes.bool,
  isInfo: propTypes.bool,
  isSmall: propTypes.bool,
  isMedium: propTypes.bool,
  isLarge: propTypes.bool,
  type: propTypes.string,
};
