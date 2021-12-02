import React from 'react'
import { EFilter } from "../actions";
import PropTypes from 'prop-types'

interface IProps {
	children: string;
	onClick: Function;
	disabled: boolean;
}

const FilterButton = ({children, onClick, disabled}: IProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(EFilter.ALL)}
    >
      {children}
    </button>
  );
};

FilterButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired
}

export default FilterButton
