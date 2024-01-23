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
    <div className="min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          <Cards courses={apiData} />
        </div>

      </div>


    </div >
  );
}

export default App;
