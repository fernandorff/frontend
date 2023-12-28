import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPerson } from '@/typings/interfaces/IPerson';
import { API_URL } from '@/constants/env/environmentVariables';

const PERSON_URL = 'person';

export const PersonsApi = createApi({
  reducerPath: 'PersonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    createPerson: builder.mutation({
      query: (newPerson: IPerson) => ({
        body: newPerson,
        method: 'POST',
        url: PERSON_URL,
      }),
    }),
    deletePersonById: builder.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `${PERSON_URL}/${id}`,
      }),
    }),
    getPersonById: builder.query({
      query: (id) => `${PERSON_URL}/${id}`,
    }),
    getPersons: builder.query({
      query: () => PERSON_URL,
    }),
  }),
});

export const {
  useGetPersonsQuery,
  useCreatePersonMutation,
  useGetPersonByIdQuery,
  useDeletePersonByIdMutation,
} = PersonsApi;
