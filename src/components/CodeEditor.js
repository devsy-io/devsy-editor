import React, {Component} from 'react'
import onLoad from 'script-onload'

export default class CodeEditor extends Component {
  componentDidMount () {
    // Load ace
    // https://github.com/segmentio/load-script/blob/master/index.js
    const script = window.document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.4/ace.js'

    // Initialize on load
    onLoad(script, () => {
      this._editor = window.ace && window.ace.edit('devsy-CodeEditor')
    })

    // Attach before first script
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  }

  render () {
    return (
      <div className='devsy-CodeEditor'>
        <input type='text' placeholder='File name including extension...' />
        <div id='devsy-CodeEditor'></div>
      </div>
    )
  }
}
