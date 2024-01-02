import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ViaCepApi = createApi({
  reducerPath: 'ViaCepApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://viacep.com.br/ws/' }),
  endpoints: (builder) => ({
    getAddressByCep: builder.query({
      query: (cep) => `${cep}/json/`,
    }),
  }),
});

export const { useGetAddressByCepQuery, useLazyGetAddressByCepQuery } =
  ViaCepApi;
