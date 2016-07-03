import findWithRegex from './utils/findWithRegex'

const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g

export default function hashtagStrategy (contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback)
}
