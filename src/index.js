import React, {Component} from 'react'
import {
  Editor,
  EditorState,
  CompositeDecorator,
  RichUtils
} from 'draft-js'
import composites from './composites'
import {CodeEditor} from './components'

class DevsyEditor extends Component {
  constructor (props) {
    super(props)
    const compositeDecorator = new CompositeDecorator(composites)

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator),
      showCodeEditor: false
    }

    this.onChange = (editorState) => this.setState({editorState})
    this.onTab = (e) => this._onTab(e)
    this.focus = () => this.refs.editor.focus()
    this.handleKeyCommand = (command) => this._handleKeyCommand(command)
    this.toggleCodeEditor = () => this._toggleCodeEditor()
  }

  _handleKeyCommand (command) {
    const {editorState} = this.state

    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  _toggleCodeEditor () {
    this.setState({
      showCodeEditor: !this.state.showCodeEditor
    })
  }

  render () {
    const {editorState, showCodeEditor} = this.state
    return (
      <div className='devsy-Editor'>
        <div className='devsy-Editor-header'>
          <span className='devsy-Editor-header-title'>
            Share your thoughts
          </span>
        </div>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          placeholder='Tell a story...'
          ref='editor'
        />
        {showCodeEditor && <CodeEditor />}
        <div className='devsy-Editor-buttons'>
          <button className='devsy-Editor-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>
          </button>
          <button className='devsy-Editor-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
          </button>
          <button className='devsy-Editor-button' onClick={this.toggleCodeEditor}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 10.826v2.349c-1.562 0-3 1.312-3 2.857 0 2.181 1.281 5.968-6 5.968v-2.002c4.917 0 3.966-1.6 3.966-3.967 0-2.094 1.211-3.5 2.278-4.031-1.067-.531-2.278-1.438-2.278-3.312 0-2.372.94-4.692-3.966-4.686v-2.002c7.285 0 6 4.506 6 6.688 0 1.544 1.438 2.138 3 2.138zm-19-2.138c0-2.182-1.285-6.688 6-6.688v2.002c-4.906-.007-3.966 2.313-3.966 4.686 0 1.875-1.211 2.781-2.278 3.312 1.067.531 2.278 1.938 2.278 4.031 0 2.367-.951 3.967 3.966 3.967v2.002c-7.281 0-6-3.787-6-5.969 0-1.545-1.438-2.857-3-2.857v-2.349c1.562.001 3-.593 3-2.137z"/></svg>
          </button>
          <button className='devsy-Editor-button devsy-Editor-button_send'>Send</button>
        </div>
      </div>
    )
  }
}

export default DevsyEditor
