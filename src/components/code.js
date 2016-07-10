import React from 'react'
import Lowlight from 'react-lowlight'

// Load any languages you want to use
// (see https://github.com/isagalaev/highlight.js/tree/master/src/languages)
import js from 'highlight.js/lib/languages/javascript'

// Then register them with lowlight
Lowlight.registerLanguage('js', js)

export const CodeSpan = ({children}) => {
  return <Lowlight language='js' value={children[0].props.text} />
}
