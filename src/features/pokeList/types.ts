export interface ServiceParams {
  offset: number;
  limit: number;
}

export interface GetResponse {
  count: number;
  next: string;
  previous: any | null;
  results: IResponseItems[];
}

export interface IResponseItems {
  name: string;
  url: string;
}
