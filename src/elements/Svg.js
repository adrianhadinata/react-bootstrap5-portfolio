import React from "react";
import propTypes from "prop-types";

export default function Svg(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={props.fillColor}
        fill-opacity={props.fillOpacity}
        d={props.drawing}
      ></path>
    </svg>
  );
}

Svg.propTypes = {
  fillColor: propTypes.string,
  fillOpacity: propTypes.string,
  drawing: propTypes.string,
};
