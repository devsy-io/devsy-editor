import {mentionStrategy, hashtagStrategy, monospaceStrategy, monospacePartialStrategy} from '../strategies'
import {Mention, Hashtag, Monospace} from '../components'

export default [{
  strategy: mentionStrategy,
  component: Mention
}, {
  strategy: hashtagStrategy,
  component: Hashtag
}, {
  strategy: monospaceStrategy,
  component: Monospace
}, {
  strategy: monospacePartialStrategy,
  component: Monospace
}]
