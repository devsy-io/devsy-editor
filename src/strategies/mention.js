import findWithRegex from 'find-with-regex'
import {MENTION_REGEX} from '../regexp'

export default function mentionStrategy (contentBlock, callback) {
  findWithRegex(MENTION_REGEX, contentBlock, callback)
}
