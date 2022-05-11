/**
 * This file contains all the utility functions used in the project
 */

import GraphemeSplitter from 'grapheme-splitter'
import { seperatorRegex } from './constants'

/**
 * - This library is used to split the characters of a string into an array
 * - Some words like "হ্যালো" actually have two characters in the string for the specific language but if we check its length, we get 3.
 * - To get appropriate results, we are using the grapheme splitter library which resolves this issue. (For the above example, the array length after spliting is 2)
 */
const splitter = new GraphemeSplitter()

/**
 * @param {string} inputString - The full text written by the user
 * @param {string} targetString - The string to be replaced
 * @param {number} startIndex - The start index of the substring to be replaced
 * @param {number} endIndex - The end index of the substring to be replaced
 * @returns {string} The full text written by the user with the replaced substring at its place
 */
export const replaceString = (inputString, targetString, startIndex, endIndex) => {
  return inputString.slice(0, startIndex) + targetString + inputString.slice(endIndex)
}

/**
 * @param {string} inputString - The full text written by the user
 * @returns {number} The number of characters in the input string
 */
export const getTotalCharacters = (inputString) => {
  return splitter.splitGraphemes(inputString).length
}

/**
 * @param {string} inputString - The full text written by the user
 * @returns {number} The number of words in the input string
 */
export const getTotalWords = (inputString) => {
  return inputString
    .trim()
    .split(seperatorRegex)
    .filter((x) => !!x.trim()).length
}
