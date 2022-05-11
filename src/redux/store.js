import { configureStore } from '@reduxjs/toolkit'
import translate from './slices/translate'
import dictionary from './slices/dictionary'

export default configureStore({
  reducer: {
    translate,
    dictionary
  }
})
