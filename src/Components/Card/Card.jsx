import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const types = [
  "bordered",
  "well",
  "white",
  "raised",
  "floating",
  "popping",
];

const Card = ( {
  children,
  type,
  style,
  className,
  onClick,
  disabled,
  selected,
  ref,
} ) => {
  return (
    <div
      ref={ ref }
      onClick={ onClick }
      className={ `card is-${type} ${disabled ? "is-disabled" : ""} 
      ${selected ? "is-selected" : ""} ${className}` }
      style={ style }
    >
      {children }
    </div>
  );
};

// eslint-disable-next-line react/no-typos
Card.propTypes = {
  type: PropTypes.oneOf( types ).isRequired,
  children: PropTypes.instanceOf( Element ).isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf( PropTypes.oneOfType( [
    PropTypes.string,
    PropTypes.number,
  ] ) ),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  ref: PropTypes.oneOfType( [
    PropTypes.func,
    PropTypes.shape( { current: PropTypes.instanceOf( Element ) } )
  ] )
};

export default Card;
