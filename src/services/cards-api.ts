import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api',
        prepareHeaders: headers => {
            // headers.append('x-auth-skip', 'true')
            return headers
        },
    }),
    endpoints: builder => {
        return {
            getCards: builder.query<any, string | void>({
                query: (search = '') => {
                    // Если введено меньше 3 символов, возвращаем пустую строку (ничего не ищем)
                    return  `character/?name=${search}`;
                }
            }),
        }
    },
})

export const { useGetCardsQuery } = cardsApi;
