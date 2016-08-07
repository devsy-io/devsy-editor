import findWithRegex from 'find-with-regex'
import {MONOSPACE_PARTIAL_REGEX} from '../regexp'

export default function monospacePartialStrategy (contentBlock, callback) {
  findWithRegex(MONOSPACE_PARTIAL_REGEX, contentBlock, callback)
}
