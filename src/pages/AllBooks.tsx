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

const AllBooks = () => {
  let data;
  const [searchData, setSearchData] = useState("");
  const { data: searchResult } = useGetBookSearchQuery(searchData);
  const { data: allBooks } = useGetAllBooksQuery(undefined);
  if (searchData) {
    data = searchResult;
  } else {
    data = allBooks;
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
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mt-4">
              <label className="label">
                <span className="label-text">Select year</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-4 w-full">
          <h2 className="text-center text-3xl font-bold my-8">All Books</h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data?.data?.map((book: IBooks) => (
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
