/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetFavoriteQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hooks";
import { IFavorite } from "../types/globalTypes";

const WishList = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data: favoriteResult } = useGetFavoriteQuery(undefined);
  const myWishBooks = favoriteResult?.data?.filter(
    (item: IFavorite) => item.email === user.email
  );

  return (
    <div>
      <div className="flex justify-center text-2xl font-bold my-10">
        <h2>Wish List</h2>
      </div>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Genre</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {myWishBooks?.map((data: Partial<IFavorite>) => (
                <tr key={data?.id}>
                  <td>{data?.bookId?.title}</td>
                  <td>{data?.bookId?.genre}</td>
                  <td>{data?.bookId?.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishList;
