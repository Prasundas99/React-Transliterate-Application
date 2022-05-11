import { getTranslatedString } from '../apis/translate'
import { updateDictionary } from '../slices/dictionary'
import store from '../store'
import { seperators } from '../../components/utils/constants'
import { replaceString } from '../../components/utils/functions'

/**
 * @param {string} str - The string to be translated
 * @param {string} languageCode - The language code for the language used for translation (e.g. en-t-i0-und)
 * @returns {array} results - Array of strings (each string in the array is a possible translation of the input string)
 * - This function takes in a string and language code and translates it to the corresponding language
 * - The result is an array of translated strings which is obtained after resolving the promise returned by the getTranslatedString() function
 * - If the request fails, we return an array containing only the input string
 */
export const translateString = async (str, languageCode) => {
  if (seperators.includes(str)) return [str]
  try {
    const res = await getTranslatedString(str, languageCode)
    return res.data[1][0][1]
  } catch (err) {
    console.error(err.message)
    return [str]
  }
}

/**
 * @param {string} inputString - The full text written by the user
 * @param {number} startIndex - The start index of the substring to be translated
 * @param {number} endIndex - The end index of the substring to be translated
 * @param {string} languageCode - The language code for the language used for translation (e.g. en-t-i0-und)
 * @returns {string} - The full text written by the user with the translated substring at its place
 */
export const handleStringTranslation = async (
  inputString,
  startIndex,
  endIndex,
  languageCode
) => {
  const targetStr = inputString.slice(startIndex, endIndex)
  try {
    const translatedResults = await translateString(targetStr, languageCode)
    if (translatedResults.length === 0) throw new Error('No results found')
    const mostProbableResult = translatedResults[0]
    store.dispatch(
      updateDictionary({ key: targetStr, values: translatedResults, languageCode })
    )
    return {
      newString: replaceString(inputString, mostProbableResult, startIndex, endIndex),
      suggessions: translatedResults
    }
  } catch (err) {
    return {
      newString: replaceString(inputString, targetStr, startIndex, endIndex),
      suggessions: []
    }
  }
}
