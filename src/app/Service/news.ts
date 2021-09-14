export interface NewsRss {
  status: string;
  feed: feedRss;
  items : Array<itemRss>
}
export interface feedRss {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface itemRss {
  title : string;
  pubDate : Date;
  link : string;
  gui :  string;
  author :  string;
  thumbnail :  string;

  description :  string;
  content:  string;
  enclosure : IRSSenclosure;
  categories : Array<string>;
}
export interface IRSSenclosure {
  link : string
}
