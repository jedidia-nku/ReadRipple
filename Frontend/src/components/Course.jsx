/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Course({ searchValue }) {
  const [book, setBook] = useState([]);
  const [ bookFound, setBookFound ] = useState(true) 
  const [searchedBooks, setSearchedBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      setBook([])
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  useMemo(()=>{

    const value = searchValue?.toString() ?? "";
    if(value.length !== 0 ){
      setSearchedBooks([]);

      const filteredBooks =  book.filter(e =>
        e.name.toLowerCase() === '' ? e :
        e.name.toLowerCase().includes(value.toLowerCase())
      );
      
      setSearchedBooks(filteredBooks) 
      if(filteredBooks.length === 0) setBookFound(false);
      else setBookFound(true)
    }
    else setSearchedBooks(book)
  }, [searchValue, book])

   
 const booksToDiplay = searchedBooks.length === 0? book: searchedBooks;
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
      { bookFound &&
       <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-12">
          Welcome, dear readers! Dive into a world of adventure, mystery, 
          and imagination with our collection of free books. Each story is a 
          doorway to a new and exciting journey, waiting just for you. 
          So grab your favorite spot, get comfortable, and let the magic of 
          reading transport you to places beyond your wildest dreams.<br /> Happy reading!
          </p>
        </div> }
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          { bookFound ? 
            booksToDiplay.map((item) => (
            <Cards key={item.id} item={item} />
          )) 
          :  <h2 className="mt-20 text-xl" >Book Not Found!!</h2>}
        </div>
      </div>
    </>
  );
}

export default Course;
