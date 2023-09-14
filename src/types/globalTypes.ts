export interface IBooks {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  favorite?: object[];
  user: string;
  img: string;
  price: string;
  reviews: string[];
  details: string;
}

export interface IFavorite {
  id: string;
  favorite: boolean;
  email: string;
  bookId: IBooks;
}
