import React, {Component} from 'react'
import {Editor, EditorState, CompositeDecorator} from 'draft-js'
import composites from './composites'
import {styles} from './styles'

class DevsyEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(new CompositeDecorator(composites))
    }

    this.onChange = (editorState) => this.setState({editorState})
    this.focus = this.focus.bind(this)
  }
  focus () {
    this.refs.editor.focus()
  }
  render () {
    const {editorState} = this.state
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            ref='editor'
            editorState={editorState}
            onChange={this.onChange}
            placeholder='Type something...' />
        </div>
      </div>
    )
  }
}

export default DevsyEditor
