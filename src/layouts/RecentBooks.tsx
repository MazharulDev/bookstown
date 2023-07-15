import BookCart from "../components/Books/BookCart";
import { IBooks } from "../types/globalTypes";

const books: IBooks[] = [
  {
    title: "The MidNight Library",
    author: "Md Mazharul islam",
    genre: "islamic",
    publicationDate: 2023,
    img: "https://i.ibb.co/gm778Jn/book1.jpg",
  },
  {
    title: "This is bussness book",
    author: "Md Mazharul islam",
    genre: "islamic",
    publicationDate: 2023,
    img: "https://i.ibb.co/vmjBL4c/book2.jpg",
  },
  {
    title: "This is bussness book",
    author: "Md Mazharul islam",
    genre: "islamic",
    publicationDate: 2023,
    img: "https://i.ibb.co/WxnvT8s/book3.jpg",
  },
  {
    title: "This is bussness book",
    author: "Md Mazharul islam",
    genre: "islamic",
    publicationDate: 2023,
    img: "https://i.ibb.co/n7gSgC7/book4.jpg",
  },
];

const RecentBooks = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-8">
        Recent Publish books
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {books.map((book) => (
          <BookCart book={book}></BookCart>
        ))}
      </div>
    </div>
  );
};

export default RecentBooks;
