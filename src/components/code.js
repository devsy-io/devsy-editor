import React from 'react'
import {styles} from '../styles'

export const CodeSpan = ({children}) => {
  return <code style={styles.code}>{children}</code>
}
