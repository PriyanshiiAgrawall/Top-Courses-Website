import React from "react";

function Filter({ filterData }) {
    console.log(filterData)
    let category = filterData.category;
    let setCategory = filterData.setCategory;
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">{
            filterData.map((filter) => {

                return (
                    <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
                  
                  `} key={filter.id}>{filter.title}</button>
                )
            })}
        </div>
    )
}

export default Filter;