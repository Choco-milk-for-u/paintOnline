import { configureStore } from '@reduxjs/toolkit'
import stateRed from './index.js';

export const store = configureStore({
  reducer: {stateRed},
})