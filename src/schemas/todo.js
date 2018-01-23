const concept = `
Simple Schema
`

const schema = {
  title: 'ToDo',
  properties: {
    title: {},
    todo: { items: {}}
  }
}

export default {
  concept,
  props: { schema },
}