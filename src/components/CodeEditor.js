import React, {Component} from 'react'
import loadScript from '@segment/load-script'

const ACE = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.4/ace.js'
const THEME = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.4/theme-github.js'
const MODE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.4/mode-'

const EXTENSION_TO_MODE = {
  js: 'javascript',
  json: 'json',
  css: 'css',
  scss: 'scss',
  html: 'html'
}

export default class CodeEditor extends Component {

  constructor(props){
    super(props)

    this.lookupFileName = (evt) => this._lookupFileName(evt)

    this.state = {
      editor: null
    }
  }

  componentDidMount () {
    let _editor

    // Load ace
    loadScript(ACE, (err, event) => {
      _editor = window.ace && window.ace.edit('devsy-CodeEditor')

      loadScript(THEME, (err, event) => {
        _editor.setTheme('ace/theme/github')

        this.setState({
          editor: _editor
        })
      })
    })
  }

  _lookupFileName (evt) {
    const ext = /[^\/\\.]*$/.exec(evt.target.value)[0]
    const mode = EXTENSION_TO_MODE[ext]
    const _editor = this.state.editor
    mode && loadScript(`${MODE_URL}${mode}.js`, (err, event) => {
      const Mode = window.ace.require(`ace/mode/${mode}`).Mode
      _editor.session.setMode(new Mode())
    })

    this.setState({
      editor: _editor
    })
  }

  render () {
    return (
      <div className='devsy-CodeEditor'>
        <div className='devsy-CodeEditor-header'>
          <input type='text' placeholder='File name including extension...' onChange={this.lookupFileName} />
        </div>
        <div id='devsy-CodeEditor'></div>
      </div>
    )
  }
}
