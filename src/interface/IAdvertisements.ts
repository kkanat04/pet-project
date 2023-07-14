export interface IAdvertisements {
  data: Daum[];
  error: any;
}

export interface Daum {
  id: string;
  timestamp: number;
  timestampPublished: number;
  idAdv: string;
  name: string;
  description: string;
  published: boolean;
}
