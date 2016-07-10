import {handleStrategy, hashtagStrategy, codeStrategy} from '../strategies'
import {HandleSpan, HashtagSpan, CodeSpan} from '../components'

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

export default composites
