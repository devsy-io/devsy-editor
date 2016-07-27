import {mentionStrategy, hashtagStrategy} from '../strategies'
import {Mention, Hashtag} from '../components'

export default [{
  strategy: mentionStrategy,
  component: Mention
},
{
  strategy: hashtagStrategy,
  component: Hashtag
}]
