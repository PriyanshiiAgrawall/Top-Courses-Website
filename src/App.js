import React from "react";
import NavBar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiData, filterData } from "./data";

// import { toast } from "react-toastify";
// import { useEffect } from "react";
// import { useState } from "react";
function App() {
  // const [courses, setCourses] = useState(null)
  // useEffect(() => {
  //   const fetchedData = async () => {
  //     try {
  //       const res = await fetch(apiData)
  //       console.log(res);
  //       const data = await res.json();
  //       console.log(data);
  //       setCourses(data);
  //     }
  //     catch (err) {
  //       console.log(err.message);
  //       toast.err("Something Went Wrong")
  //     }
  //   }
  //   fetchedData()
  // }, [])
  return (
    <div>
      <NavBar></NavBar>
      <Filter filterData={filterData}></Filter>
      <Cards courses={apiData}></Cards>




    </div>
  );
}

export default App;
