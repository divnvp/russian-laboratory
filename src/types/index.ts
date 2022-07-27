export interface State {
  posts: Array<post>;
}

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
