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
      <div className="container mx-auto">
        {reviewAll?.map((review: string, index: number) => (
          <div key={index}>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
