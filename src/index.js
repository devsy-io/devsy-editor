import React, {Component} from 'react'
import {
  Editor,
  EditorState,
  CompositeDecorator,
  RichUtils
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
    this.handleKeyCommand = (command) => this._handleKeyCommand(command)
  }

  _handleKeyCommand (command) {
    const {editorState} = this.state
    console.log(editorState.getSelection())
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  render () {
    const {editorState} = this.state

    return (
      <Editor
        editorState={editorState}
        onChange={this.onChange}
        handleKeyCommand={this.handleKeyCommand}
        placeholder='Tell a story...'
        ref='editor'
      />
    )
  }
}

export default DevsyEditor
