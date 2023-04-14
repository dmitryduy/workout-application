import { AxiosResponse } from 'axios';

import { QueryParams } from '../types/http';
import { HTTP } from '../types/http';
import instance from '../axios';

type Method = 'post' | 'put' | 'delete' | 'patch';

export type QueryConfig = {
  params: QueryParams;
};

export const apiFunctionQuery = <TRes>(pathName: HTTP) => {
  return (config?: QueryConfig): Promise<AxiosResponse<TRes>> => instance.get<TRes>(pathName, config);
};

export const apiFunctionMutation = <TReq, TRes>(method: Method, pathName: HTTP) => {
  return (data: TReq): Promise<AxiosResponse<TRes>> => instance(pathName, {data, method});
};