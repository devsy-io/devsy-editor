import {handleStrategy, hashtagStrategy, codeStrategy} from '../strategies'
import {HandleSpan, HashtagSpan, CodeHighlighter} from '../components'

const composites = [{
  strategy: handleStrategy,
  component: HandleSpan
}, {
  strategy: hashtagStrategy,
  component: HashtagSpan
}, {
  strategy: codeStrategy,
  component: CodeHighlighter
}]

export default composites
