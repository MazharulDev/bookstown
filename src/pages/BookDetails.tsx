/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBookDetailsQuery,
} from "../redux/api/apiSlice";
import Review from "../components/Books/Review";
import { useAppSelector } from "../redux/hooks";
import { toast } from "react-toastify";

interface IProps {
  id: string;
}

const BookDetails = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const { data } = useGetBookDetailsQuery(id as string);
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = (id: IProps) => {
    deleteBook({ id });
    toast.success("Book delete successfully");
    navigate("/books");
  };
  const book = data?.data[0];
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="relative min-h-screen flex flex-col items-center justify-center ">
          <h2 className="text-4xl font-bold my-5">{book?.title}</h2>
          <div className="container">
            <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6">
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                      {book?.favorite === true ? (
                        <button className="transition ease-in duration-300 bg-gray-800  text-purple-500 shadow hover:shadow-md rounded-full w-8 h-8 text-center p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                    <img
                      src={book?.img}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-red-500 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="mr-2 text-gray-400">
                          {book?.genre}
                        </span>
                        <h2 className="text-right text-slate-200">
                          - {book?.publicationDate}
                        </h2>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                          {book?.title}
                        </h2>

                        <div className="flex items-center bg-blue-600 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          Author:{" "}
                          <span className="font-bold ml-1">{book?.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xl text-white font-semibold mt-1">
                      ${book?.price}
                    </div>

                    <div className="flex space-x-2 text-sm font-medium justify-start mt-3"></div>
                  </div>
                  {user.email === book?.user && (
                    <div className="flex justify-end items-center gap-4">
                      <Link
                        to={`/edit-book/${id}`}
                        className="btn btn-xs btn-warning"
                      >
                        Edit book
                      </Link>
                      <button
                        onClick={() => handleDelete(book?._id)}
                        className="btn btn-xs btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user.email ? <Review id={id!} /> : ""}
    </div>
  );
};

export default BookDetails;
