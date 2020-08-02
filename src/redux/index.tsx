import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit'

import data from './data'

const [thunk, logger] = getDefaultMiddleware()

export default configureStore(
  {
    reducer: data,
    middleware: process.env.NODE_ENV !== 'production' ? [thunk, logger] : [thunk],
    devTools: process.env.NODE_ENV !== 'production',
  }
)