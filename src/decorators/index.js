import {handleStrategy, hashtagStrategy, codeStrategy} from '../strategies'
import {HandleSpan, HashtagSpan, CodeSpan} from '../components'
import {CompositeDecorator} from 'draft-js'
import MultiDecorator from 'draft-js-multidecorators'

const CODE_REGEX = /`.+`/

class CodeDecorator {
  getDecorations(contentBlock) {
    const text = contentBlock.getText()

    if(CODE_REGEX.test(text)){
      let matches
      console.log((matches = CODE_REGEX.exec(text)) !== null)
      console.log(matches)
    }

    return []
  }
  getComponentForKey(key) {
    debugger
    return []
  }
  getPropsForKey(key){
    debugger
    return []
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
