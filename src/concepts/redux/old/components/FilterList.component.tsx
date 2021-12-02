import React from "react";
import { connect } from "react-redux";
import { EFilter, setFilter } from "../actions";
import FilterButton from "./FilterButton.component";

const Filter = (props: any) => {
  return (
    <>
      <FilterButton
        disabled={props.filter === EFilter.ALL ? true : false}
        onClick={() => props.onClick(EFilter.ALL)}
      >
        All
      </FilterButton>
      <FilterButton
        disabled={props.filter === EFilter.ACTIVE ? true : false}
        onClick={() => props.onClick(EFilter.ACTIVE)}
      >
        Active
      </FilterButton>
      <FilterButton
        disabled={props.filter === EFilter.COMPLETED ? true : false}
        onClick={() => props.onClick(EFilter.COMPLETED)}
      >
        Completed
      </FilterButton>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (filter: EFilter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
