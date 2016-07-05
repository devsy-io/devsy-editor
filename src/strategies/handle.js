import findWithRegex from './utils/findWithRegex'

const HANDLE_REGEX = /@[\w]+/g

export default function handleStrategy (contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback)
}
