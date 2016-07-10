import React from 'react'
import {styles} from '../styles'
import lowlight from 'lowlight'

export const CodeSpan = ({children}) => {
  const abstractSyntaxTree = lowlight.highlightAuto(children[0].props.text.replace(/`+/g, ''))
  const code = abstractSyntaxTree.value.length ? abstractSyntaxTree.value
    .map((token, index) => {
      console.log(token)
      if (token.type === 'element') {
        return React.createElement(token.tagName, {
          className: token.properties.className.join(' '),
          key: index
        },
        token.children.map(c => c.value).join(''))
      } else {
        return token.value
      }
    }) : children[0].props.text.replace(/`+/g, '')

  return (
    <div style={{ display: 'inline-block' }}>
      <span style={{ display: 'none' }}>`</span>
      <span style={styles.code}>{code}</span>
      <span style={{ display: 'none' }}>`</span>
    </div>
  )
}
