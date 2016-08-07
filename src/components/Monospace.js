import React from 'react'
import {Entity} from 'draft-js'
import {SyntaxHighlighter} from 'devsy-components'

export default function Monospace (props) {
  return (
    <div className='devsy-Monospace'>
      <span style={{ display: 'none' }}>`</span>
      {/* <SyntaxHighlighter snippet={props.decoratedText.replace(/`+/g, '')} language='javascript' /> */}
      {props.children}
      <span style={{ display: 'none' }}>`</span>
    </div>
  )
}
