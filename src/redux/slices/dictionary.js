import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

/**
 * - Redux Toolkit allows us to write "mutating" logic in reducers.
 * - But it doesn't actually mutate the state.
 * - It uses the Immer library which detects changes to a "draft state" and produces a brand new immutable state based off those changes
 */

/**
 * - We are creating a redux slice here called dictionary. It's purpose is to map a word with its corresponding translations.
 * - Whenever an user selects an existing word, we can reference this dictionary to get its corresponding translations.
 */
export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    /**
     *
     * @param {object} state - The current state of the dictionary
     * @param {object} action - The action object containing the payload dispatched
     * - The payload contains the key and a values array
     * - We map the key with every element in the values array
     */
    updateDictionary: (state, action) => {
      const key = action.payload.key.trim()
      const language = action.payload.languageCode
      const values = action.payload.values.map((v) => v.trim())
      if (state[language] && state[language][key]) return
      const arr = [...values, key]
      if (!state[language]) state[language] = {}
      state[language][key] = values
      arr.forEach((el) => (state[language][el] = arr.filter((x) => x !== el)))
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateDictionary } = dictionarySlice.actions

export default dictionarySlice.reducer
