import {handleStrategy, hashtagStrategy, codeStrategy} from '../strategies'
import {HandleSpan, HashtagSpan, CodeSpan} from '../components'
import {CompositeDecorator} from 'draft-js'

const composites = [{
  strategy: handleStrategy,
  component: HandleSpan
}, {
  strategy: hashtagStrategy,
  component: HashtagSpan
}, {
  strategy: codeStrategy,
  component: CodeSpan
}]

export default new CompositeDecorator(composites)
