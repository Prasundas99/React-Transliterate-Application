import { TextArea } from './editor.styles'
import { useEditor } from './editor'

/**
 * @returns {JSX.Element} The editor component
 * @description
 * - The editor component which consists of an text area
 * - This component can be reused anywhere
 * @example
 * import Editor from 'layouts/editor';
 *
 * const App = () => {
 *  return <Editor />;
 * }
 */
const Editor = () => {
  const { content, onContentChange, onContentSelect } = useEditor()

  return (
    <>
      <TextArea
        onSelect={onContentSelect}
        rows={10}
        value={content}
        onChange={onContentChange}
      ></TextArea>
    </>
  )
}

export default Editor
