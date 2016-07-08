import {handleStrategy, hashtagStrategy, codeStrategy} from '../strategies'
import {HandleSpan, HashtagSpan, CodeSpan} from '../components'
import {CompositeDecorator} from 'draft-js'
import MultiDecorator from 'draft-js-multidecorators'
import lowlight from 'lowlight'
import {List} from 'immutable'
import React from 'react'

const CODE_REGEX = /`.+`/

class CodeDecorator {
  constructor(){
    this.highlighted = {}
  }
  getDecorations(contentBlock) {
    const blockKey = contentBlock.getKey()
    const text = contentBlock.getText()
    const highlights = []
    let matches = []
    let offset = 0

    this.highlighted[blockKey] = {}

    if((matches = CODE_REGEX.exec(text)) !== null) {
      const abstractSyntaxTree = lowlight.highlight('js', text.replace(/`+/g, ''))
      abstractSyntaxTree.value
        .map(token => {
          if(token.type === 'element'){
            const tokenId = 'tok' + offset
            const resultId = blockKey + '-' + tokenId
            this.highlighted[blockKey][tokenId] = token
            highlights.push(resultId)
          }
          else {
            offset += token.value.length
          }
        })
    }
    return List(highlights)
  }
  getComponentForKey(key) {
    return (props) => {
      props = Object.assign({}, props, {
        className: 'prism-token token ' + props.type
      })

    return React.createElement(
        "span",
        props,
        props.children
      )
    }
  }
  getPropsForKey(key){
    var parts = key.split('-')
    var blockKey = parts[0]
    var tokenId = parts[1]
    var token = this.highlighted[blockKey][tokenId]

    return {
      type: token.type
    }
  }
}

function occupySlice(targetArr, start, end, componentKey) {
  for (var ii = start; ii < end; ii++) {
    targetArr[ii] = componentKey
  }
}

const composites = [{
  strategy: handleStrategy,
  component: HandleSpan
}, {
  strategy: hashtagStrategy,
  component: HashtagSpan
}]

export default new MultiDecorator([
  new CodeDecorator(),
  new CompositeDecorator(composites)
])
