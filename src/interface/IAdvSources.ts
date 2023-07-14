export interface IAdvSources {
  data: Daum[];
  error: any;
}

export interface Daum {
  id: string;
  timestamp: number;
  name: string;
  description: string;
  utmSource: string;
  utmCompaign: string;
  type: string;
}
