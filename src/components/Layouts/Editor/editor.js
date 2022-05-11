

/**
 * @returns {object} Contains the following properties:
 * @property {string} content The content present in the editor
 * @property {function} onContentChange The callback function to be used when the content is updated
 * @property {function} onContentSelect The callback function to be used when part of the content is selected
 * - This hook returns the functions and data to be used in the editor component
 * - It seperates the logic from the component and makes it reusable
 */
export const useEditor = () => {
  const dispatch = useDispatch();
  const { content, language } = useSelector((state) => state.translate);
  const dictionary = useSelector((state) => state.dictionary);

  /**
   *
   * @param {event} e The event object
   * @returns {array} An array consisting of the start and end index of the selected text in the whole content
   */
  const getSelectedTextIndexes = (e) => {
    let startIndex = e.target.selectionStart;
    let endIndex = e.target.selectionEnd;
    return [startIndex, endIndex];
  };

  /**
   *
   * @param {string} inputString The input string to be translated
   * @returns An array consisting of the start and end index of the last word in the whole content
   * - This function is used to get the indexes of the last word in the content
   */
  const getLastTextIndexes = (inputString) => {
    let j = inputString.length - 1;
    let i = j - 1;
    while (i >= 0 && !seperators.includes(inputString[i])) i--;
    i++;
    return [i, j];
  };

  /**
   *
   * @param {event} e The event object
   * @returns {void} Nothing
   * - This is the callback function to be used when part of the content is selected
   * - It searches for the possible translations of the selected text ans stores them in the reducer
   * - It also updates the start and end index of the selected text in the reducer
   */
  const onContentSelect = async (e) => {
    const inputString = e.target.value;
    const [startIndex, endIndex] = getSelectedTextIndexes(e);
    const selectedString = inputString.slice(startIndex, endIndex).trim();
    if (startIndex === endIndex || !selectedString || seperators.includes(selectedString)) {
      dispatch(setCurrentContentOptions([]));
      return;
    }
    dispatch(setStartAndEndIndex([startIndex, endIndex]));
    dispatch(setCurrentContentOptions(await getSuggessions(inputString, startIndex, endIndex, language)));
  };

  /**
   * @param {string} fullString The full string entered in the editor
   * @param {number} startIndex The start index of the target text
   * @param {number} endIndex The end index of the target text
   * @param {object} language Object containing the language code and the language name of the currently selected language
   * @returns {array} An array consisting of the possible translations of the target text
   */
  const getSuggessions = async (fullString, startIndex, endIndex, language) => {
    const str = fullString.slice(startIndex, endIndex).trim();
    if (dictionary[language.value] && dictionary[language.value][str]) return dictionary[language.value][str];
    const { suggessions } = await handleStringTranslation(fullString, startIndex, endIndex, language.value);
    return suggessions;
  };

  /**
   *
   * @param {event} e The event object
   * @returns {void} Nothing
   * - This is the callback function to be used when the content is updated
   * - It gets the start and end index of the last word in the content translates it accordingly
   */
  const onContentChange = async (e) => {
    const inputString = e.target.value;
    try {
      if (!seperators.includes(inputString.at(-1))) throw new Error('Continuing existing word, put a seperator to translate the word');
      const [startIndex, endIndex] = getLastTextIndexes(inputString);
      if (startIndex === endIndex) throw new Error('Nothing to translate');
      const { newString } = await handleStringTranslation(inputString, startIndex, endIndex, language.value);
      dispatch(setContent(newString));
    } catch (err) {
      dispatch(setContent(inputString));
    }
  };

  return { content, onContentChange, onContentSelect };
};
