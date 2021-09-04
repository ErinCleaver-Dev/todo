import React from 'react';
import FilterLinks from "./FilterLinks"
import {VisibilityFilters} from "../../actions/Actions"

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLinks filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLinks>
        <FilterLinks filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLinks>
        <FilterLinks filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLinks>
    </div>
)

export default Footer