const favoritThings = {
  title: "Favorit Things Set",
  properties: {
    title: {
      type: 'integer',
    },
    things: {
      type: 'array',
      items: {},
    },
  }
}

const schema = {
  title: 'My Favorite Things',
  description: "When I'm feeling sad, I simply remember my favorite things, then I don't feel so bad",
  required: ['title'],
  properties: {
    title: {},
    description: {
      title: 'Description',
      default: 'A new day'
    },
    lists: {
      title: 'My Favorit Things',
      items: favoritThings,
    },
    tags: {
      title: 'Tags',
      description: 'Tags for search',
      items: { title: 'Tag', type: 'string' }
    },
  }
}

const uiSchema = {
  description: {
    'ui:widget': 'textarea'
  }
}

export default { schema, uiSchema }