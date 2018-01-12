import clone from 'clone'

const complement = s => {

  if (s.$ref) return s

  if (s.definitions) {
    const defs = s.definitions
    Object.keys(defs).forEach(k => complement(defs[k]))
  }

  if (s.items) {
    s.type = 'array'
    complement(s.items)
  }

  if (s.properties) {
    s.type = 'object'
    const props = s.properties
    Object.keys(props).forEach(k => complement(props[k]))
  }

  if (!s.type) {
    s.type = 'string'
  }

  return s
}

export default s => complement(clone(s))
