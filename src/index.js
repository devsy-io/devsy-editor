import React, {Component} from 'react'
import {
  Editor,
  EditorState,
  CompositeDecorator
} from 'draft-js'
import composites from './composites'

class DevsyEditor extends Component {
  constructor (props) {
    super(props)
    const compositeDecorator = new CompositeDecorator(composites)

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    }

    this.onChange = (editorState) => this.setState({editorState})
    this.focus = () => this.refs.editor.focus()
  }

  render () {
    const {editorState} = this.state

    return (
      <Editor
        editorState={editorState}
        onChange={this.onChange}
        placeholder='Tell a story...'
        ref='editor'
      />
    )
  }
}

export default DevsyEditor
