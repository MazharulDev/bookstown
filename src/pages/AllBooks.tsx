/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import BookCart from "../components/Books/BookCart";
import {
  useGetAllBooksQuery,
  useGetBookSearchQuery,
} from "../redux/api/apiSlice";
import { IBooks } from "../types/globalTypes";
import { Link } from "react-router-dom";

const AllBooks = () => {
  let data;
  const [searchData, setSearchData] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const { data: searchResult } = useGetBookSearchQuery(searchData);
  const { data: allBooks } = useGetAllBooksQuery(undefined);
  if (searchData) {
    data = searchResult?.data;
  } else if (genre.length > 0) {
    data = allBooks?.data?.filter((item: any) => item.genre === genre);
  } else if (year.length > 0) {
    data = allBooks?.data?.filter((item: any) => item.publicationDate === year);
  } else {
    data = allBooks?.data;
  }
  return (
    <div>
      <div className="container grid grid-cols-5 mx-auto">
        <div className="col-span-1">
          <h2 className="text-center text-3xl font-bold my-8">Filter Books</h2>
          <div className="form-control w-full max-w-xs">
            <input
              onChange={(e) => setSearchData(e.target.value)}
              type="text"
              placeholder="Type book name, author and genre"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <div className="form-control w-full max-w-xs mt-4">
              <label className="label">
                <span className="label-text">Select genre</span>
              </label>
              <select
                onChange={(e) => setGenre(e.target.value)}
                className="select select-bordered"
                onClick={() => setYear("")}
              >
                <option disabled selected>
                  Select genre
                </option>
                {/* {allBooks?.data?.map((book: any) => (
                  <option value={book.genre}>{book.genre}</option>
                ))} */}

                <option value="Science fiction">Science fiction</option>
                <option value="Thriller">Thriller</option>
                <option value="Detective and Mystery">
                  Detective and Mystery
                </option>
                <option value="Historical Fiction">Historical Fiction</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mt-4">
              <label className="label">
                <span className="label-text">Select year</span>
              </label>
              <select
                onChange={(e) => setYear(e.target.value)}
                className="select select-bordered"
                onClick={() => setGenre("")}
              >
                <option disabled selected>
                  Select publication year
                </option>
                <option value="2007">2007</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2018">2018</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-4 w-full">
          <h2 className="text-center text-3xl font-bold my-8">All Books</h2>
          <div className="flex justify-end mb-5 gap-5">
            <Link to="/create-book" className="btn btn-sm btn-success">
              Add New Book
            </Link>
            <Link to="/wish-list" className="btn btn-sm btn-success">
              WishListed
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data?.map((book: IBooks) => (
                <BookCart book={book}></BookCart>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
