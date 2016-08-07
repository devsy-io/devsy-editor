import findWithRegex from 'find-with-regex'
import {HASHTAG_REGEX} from '../regexp'

export default function hashtagStrategy (contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback)
}
