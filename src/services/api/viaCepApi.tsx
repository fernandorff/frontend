import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IViaCepGetAddressByCepResponse } from '@/typings/response/iViaCepGetAddressByCepResponse';

export const ViaCepApi = createApi({
  reducerPath: 'ViaCepApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://viacep.com.br/ws/' }),
  endpoints: (builder) => ({
    getAddressByCep: builder.query({
      query: (cep) => `${cep}/json/`,
      transformResponse: (result: IViaCepGetAddressByCepResponse) => {
        return result;
      },
    }),
  }),
});

export const { useGetAddressByCepQuery, useLazyGetAddressByCepQuery } =
  ViaCepApi;
