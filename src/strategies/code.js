import findWithRegex from './utils/findWithRegex'

const CODE_REGEX = /`.+`/g

export default function codeStrategy (contentBlock, callback) {
  findWithRegex(CODE_REGEX, contentBlock, callback)
}
