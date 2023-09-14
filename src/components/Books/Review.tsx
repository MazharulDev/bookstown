/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "../../redux/api/apiSlice";
import { BiCommentDetail } from "react-icons/bi";
interface IProp {
  id: string;
}

const Review = ({ id }: IProp) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [postReview] = usePostReviewMutation();
  const { data } = useGetReviewsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });

  const reviewAll = data?.data[0]?.reviews;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    postReview(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="">
      <h2 className="text-2xl text-center mt-5 font-bold ">Book Reviews</h2>
      <div className="container mx-auto mt-5">
        {reviewAll?.map((review: string, index: number) => (
          <div className="bg-slate-200 p-3 mt-2 rounded-lg" key={index}>
            <div className="flex justify-center items-center gap-5">
              <BiCommentDetail />
              <p>{review}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-center text-2xl my-5">Add Review</h2>
        <form
          className="flex justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <textarea
            onChange={handleChange}
            value={inputValue}
            className="textarea textarea-bordered textarea-xs w-full max-w-2xl"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
