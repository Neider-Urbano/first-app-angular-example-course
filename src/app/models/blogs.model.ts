export interface Blog {
  id: number;
  title: string;
  description: string;
  img: string;
  date: Date;
  link: string;
}

export type Blogs = Array<Blog>;
