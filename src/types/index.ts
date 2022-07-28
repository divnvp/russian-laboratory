export type RootState = {
  version: string;
  baseUrl: string;

  users: Array<User>;
  posts: Array<Post>;
  albums: Array<Album>;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
