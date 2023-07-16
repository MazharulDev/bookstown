/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookCart from "../components/Books/BookCart";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBooks } from "../types/globalTypes";

const RecentBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-8">
        Recent Publish ten books
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {data?.data?.map((book: IBooks) => (
          <BookCart book={book}></BookCart>
        ))}
      </div>
    </div>
  );
};

export default RecentBooks;
