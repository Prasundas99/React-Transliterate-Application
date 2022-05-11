import { useMemo } from 'react';
import { RootContainer, Header, CardsContainer } from './translator.styles';
import Autocomplete, { Option } from '../../Autocomplete';
import TextField from '../../TextField';
import { useTheme } from '@emotion/react';
import Flex from '../../Flex';
import InfoCard from '../../Cards/InfoCard';
import Button from '../../Button';
import Editor from '../Editor';
import { useTranslator } from './translator';
import { useSelector } from 'react-redux';
import { getTotalCharacters, getTotalWords } from '../../utils/functions';
import { languages } from '../../utils/constants';

/**
 * @returns {JSX.Element} The translator UI
 * @description
 * - Consists of an select component to choose language, a header element where translation suggessions are shown to the user, Editor component and some action buttons
 * - This component can be reused anywhere
 * @example
 * import Translator from 'layouts/translator';
 *
 * const App = () => {
 *  return <Translator />;
 * }
 */
const Translator = () => {
  const theme = useTheme();
  const { content, language } = useSelector((state) => state.translate);
  const {
    suggessions,
    updateSelectedText,
    setCurrentLanguage,
    downloadContent,
    saveContent,
    copyContent,
    printContent,
    resetContent,
    printIframeRef,
  } = useTranslator();

  /**
   * Action buttons text and their respective onClick callbacks
   * Add another object to the array to create a new button in the UI
   */
  const actionButtons = [
    { label: 'Download', onClick: downloadContent },
    { label: 'Save', onClick: saveContent },
    { label: 'Copy', onClick: copyContent },
    { label: 'Print', onClick: printContent },
    { label: 'Reset', onClick: resetContent },
  ];

  /**
   * getTotalCharacters - Returns the total number of characters in the content
   * getTotalWords - Returns the total number of words in the content
   * Both the functions are memoized and only recalculates the value when the content changes
   */
  const totalCharacters = useMemo(() => getTotalCharacters(content), [content]);
  const totalWords = useMemo(() => getTotalWords(content), [content]);

  /**
   *
   * @prop {array} suggessions - The translation suggessions array
   * - Whenever the user selects a text, multiple translation suggession buttons are shown in this component
   * - The user can select any button to update the selected text
   * @returns {JSX.Element} The translation suggession buttons
   */
  const TranslateHeader = ({ suggessions }) => {
    return (
      <Header elevation={0}>
        <Flex align='center'>
          {suggessions.length === 0 ? (
            <p>Translate from English to {language.label}</p>
          ) : (
            suggessions.map((s, index) => (
              <Button key={index} size='small' variant='contained' type='primary' onClick={() => updateSelectedText(s)}>
                {s}
              </Button>
            ))
          )}
        </Flex>
      </Header>
    );
  };

  return (
    <RootContainer elevation={0}>
      <iframe title='text-print-assist' ref={printIframeRef} style={{ display: 'none' }} />
      <Flex justify='space-evenly' align='center' wrap='wrap'>
        <Autocomplete
          size='small'
          options={languages}
          getOptionLabel={(option) => option.label}
          defaultValue={languages[0]}
          sx={{ width: 300, background: theme.palette.background.default }}
          renderOption={(props, option) => <Option {...props}>{option.label}</Option>}
          renderInput={(params) => <TextField {...params} label='Select Language' />}
          onChange={(e, selectedOption) => setCurrentLanguage(selectedOption)}
        />
      </Flex>
      <TranslateHeader suggessions={suggessions} />
      <Editor />
      <CardsContainer>
        <InfoCard elevation={0} label='Words' value={totalWords} />
        <InfoCard elevation={0} label='Chars' value={totalCharacters} />
        {actionButtons.map((el, i) => (
          <Button key={i} size='small' variant='contained' type='secondary' onClick={(e) => el.onClick(e)}>
            {el.label}
          </Button>
        ))}
      </CardsContainer>
    </RootContainer>
  );
};

export default Translator;
