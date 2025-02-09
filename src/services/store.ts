import { configureStore } from '@reduxjs/toolkit'
import {cardsApi} from "@/services/cards-api";

export const store = configureStore({
    reducer: {
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cardsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
