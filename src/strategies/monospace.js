import findWithRegex from 'find-with-regex'
import {MONOSPACE_REGEX} from '../regexp'

export default function monospaceStrategy (contentBlock, callback) {
  findWithRegex(MONOSPACE_REGEX, contentBlock, callback)
}
