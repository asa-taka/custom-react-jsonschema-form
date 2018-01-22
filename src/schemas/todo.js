const description = `
Practice Concepts: Simple Schema
`

const schema = {
  title: 'ToDo',
  properties: {
    title: {},
    todo: { items: {}}
  }
}

export default {
  description,
  props: { schema }
}