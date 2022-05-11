import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContent, setLanguage } from '../../../redux/slices/translate'
import { replaceString } from '../../utils/functions'

/**
 * @returns {object} Contains the following properties:
 * @property {array} suggessions - Array of suggessions for any given text
 * @property {function} updateSelectedText Function to update the selected text to the target text
 * @property {function} setCurrentLanguage Sets the selected language as the current language for translation
 * @property {function} copyContent Function that copies the content to the clipboard
 * @property {function} printContent Function that prints the content
 * @property {function} resetContent Function to reset the editor i.e. clear all the existing text
 * @property {ref} printIframeRef Reference to the iframe element which is responsible for printing the content
 * - This hook returns the functions and data to be used in the translator component.
 * - It seperates the logic from the component and makes it reusable
 */
export const useTranslator = () => {
  const dispatch = useDispatch()

  // This is for the reference to the iframe element which is responsible for printing the content
  const printIframeRef = useRef(null)

  const { content, currentContentOptions, selectionStartIndex, selectionEndIndex } =
    useSelector((state) => state.translate)

  /**
   * @param {string} selectedText The selected text to be updated
   * - This function updates the selected text to the target text given the selected text and the selection start and end index of the origin text
   */
  const updateSelectedText = (selectedText) => {
    dispatch(
      setContent(replaceString(content, selectedText, selectionStartIndex, selectionEndIndex))
    )
  }

  /**
   * @param {string} lang The language to be set as the current language for translation
   * - Sets the selected language as the current language for translation in the reducer
   */
  const setCurrentLanguage = (lang) => {
    dispatch(setLanguage(lang))
  }



  /**
   * - This function copies the content to the clipboard
   */
  const copyContent = () => {
    navigator.clipboard.writeText(content)
  }

  /**
   * - This function open ups the print dialog in the browser letting users to print the content
   * - Here, we are using the iframe element to print the content
   * - The content is stored in the iframe element and the iframe is printed
   * - The iframe is present in the DOM on mount but is hidden from the user
   * - We can only print the full window and not parts of it. To print only the content, we need to simulate the window in an iframe
   */
  const printContent = () => {
    if (!printIframeRef || !printIframeRef.current) return
    const contentWindow = printIframeRef.current.contentWindow
    contentWindow.document.open()
    contentWindow.document.write(content)
    contentWindow.document.close()
    contentWindow.focus()
    contentWindow.print()
  }

  /**
   * - This function clears the content in the editor
   */
  const resetContent = () => {
    dispatch(setContent(''))
  }

  return {
    suggessions: currentContentOptions,
    updateSelectedText,
    setCurrentLanguage,
    copyContent,
    printContent,
    resetContent,
    printIframeRef
  }
}
