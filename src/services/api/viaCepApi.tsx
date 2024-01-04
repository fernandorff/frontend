import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IViaCepGetAddressByCepResponse } from '@/typings/response/iViaCepGetAddressByCepResponse';
import { notification } from 'antd';
import { NEXT_PUBLIC_VIACEP_API_URL } from '@/constants/env/ENV';

export const ViaCepApi = createApi({
  reducerPath: 'ViaCepApi',
  baseQuery: fetchBaseQuery({ baseUrl: NEXT_PUBLIC_VIACEP_API_URL }),
  endpoints: (builder) => ({
    getAddressByCep: builder.query({
      query: (cep) => `${cep}/json/`,
      transformResponse: (result: IViaCepGetAddressByCepResponse) => {
        return result;
      },
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const response = await queryFulfilled;

          if (response.data.erro) {
            notification.error({
              message: 'Não foi possível encontrar o endereço.',
              description: 'Verifique se o CEP está correto e tente novamente.',
            });
          } else {
            notification.success({
              message: 'Endereço encontrado.',
              description: 'Preencha os campos restantes.',
            });
          }
        } catch (error) {
          notification.error({
            message: 'Ocorreu um erro ao buscar o endereço.',
            description: 'Verifique se o CEP está correto e tente novamente.',
          });
        }
      },
    }),
  }),
});

export const { useGetAddressByCepQuery, useLazyGetAddressByCepQuery } =
  ViaCepApi;
