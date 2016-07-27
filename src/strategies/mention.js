import findWithRegex from './utils/findWithRegex'

const MENTION_REGEX = /@[\w]+/g

export default function mentionStrategy (contentBlock, callback) {
  findWithRegex(MENTION_REGEX, contentBlock, callback)
}
