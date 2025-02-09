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
            getCards: builder.query<any, any | void>({
                query: (args) =>( {
                    url: `character/?name=Morty`,
                    params: args ,
                }),
            }),
        }
    },
})

export const { useGetCardsQuery } = cardsApi
