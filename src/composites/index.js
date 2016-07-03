import {handleStrategy, hashtagStrategy} from '../strategies'
import {HandleSpan, HashtagSpan} from '../components'

export default [{
  strategy: handleStrategy,
  component: HandleSpan
},
{
  strategy: hashtagStrategy,
  component: HashtagSpan
}]
