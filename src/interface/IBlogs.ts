export interface IBlogs {
  data: Daum[];
  error: any;
}

export interface Daum {
  id: string;
  tags: any[];
  claps: number;
  last_modified_at: string;
  published_at: string;
  url: string;
  image_url: string;
  lang: string;
  publication_id: string;
  word_count: number;
  title: string;
  reading_time: number;
  responses_count: number;
  voters: number;
  topics: string[];
  author: string;
  subtitle: string;
}
