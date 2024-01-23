import React from "react";

function Filter({ filterData }) {
    console.log(filterData)
    return (
        <div>{
            filterData.map((filter) => {

                return (
                    <button key={filter.id}>{filter.title}</button>
                )
            })}
        </div>
    )
}

export default Filter;