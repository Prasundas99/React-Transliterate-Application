import axios from 'axios'

const baseUrl = 'https://inputtools.google.com'

console.log(baseUrl)

/**
 *
 * @param {string} inputString The input string to be translated
 * @param {string} languageCode The language code to translate to
 * @returns Promise<AxiosResponse<any, any>> The response from the API
 * @description This function takes in a string and a language code and calls the api to fetch the translated strings.
 * It returns an array of possible translations.
 */
export const getTranslatedString = (inputString = '', languageCode) => {
  return axios.get(
    `${baseUrl}/request?text=${inputString}&itc=${languageCode}&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`
  )
}
