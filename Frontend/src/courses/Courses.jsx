// import { useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import { useState } from "react";
function Courses() {
  
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
    <Navbar onSearch={val=> setSearchValue(val)} />
      <div className=" min-h-screen">
        <Course searchValue={searchValue}  />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
