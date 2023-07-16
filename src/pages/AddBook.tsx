/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hooks";
import { usePostBookMutation } from "../redux/api/apiSlice";
import { toast } from "react-toastify";

interface IAddBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  img: string;
  price: string;
  user?: string;
  details: string;
  reviews?: [];
}

const AddBook = () => {
  const { user } = useAppSelector((state) => state.user);
  const [postBook] = usePostBookMutation();
  const { register, handleSubmit, reset } = useForm<IAddBook>();
  const onSubmit = (data: IAddBook) => {
    const options = {
      data: {
        title: data.author,
        author: data.author,
        genre: data.genre,
        publicationDate: data.publicationDate,
        img: data.img,
        price: data.price,
        user: user.email,
        details: data.details,
        reviews: [],
      },
    };
    postBook(options);
    toast("Book Added Successfully");
    reset();
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-8">Add Book</h2>
      <div className="flex justify-center">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Write book title</span>
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Write book author</span>
              </label>
              <input
                {...register("author", { required: "Author is required" })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Write book genre</span>
              </label>
              <input
                {...register("genre", { required: "genre is required" })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Write book publication Year</span>
              </label>
              <input
                {...register("publicationDate", {
                  required: "publicationDate is required",
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Add Image link</span>
              </label>
              <input
                {...register("img", {
                  required: "img is required",
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Write book price</span>
              </label>
              <input
                {...register("price", {
                  required: "price is required",
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Write book details</span>
              </label>
              <textarea
                {...register("details", {
                  required: "details is required",
                })}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </div>
            <input
              className="btn btn-success mt-5"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
