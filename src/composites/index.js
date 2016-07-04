import {handleStrategy, hashtagStrategy, codeStrategy} from '../strategies'
import {HandleSpan, HashtagSpan, CodeSpan} from '../components'

export default [{
  strategy: handleStrategy,
  component: HandleSpan
}, {
  strategy: hashtagStrategy,
  component: HashtagSpan
}, {
  strategy: codeStrategy,
  component: CodeSpan
}]
