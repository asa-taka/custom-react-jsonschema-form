const userSchema = {
  title: 'User',
  description: 'User profile',
  properties: {
    name: {},
    pass: { description: 'Your awesom password!' },
    age: { type: 'number' },
    friends: {
      title: 'Friends',
      items: {
        title: 'Friend',
        $ref: '#/definitions/user'
      }
    }
  }
}

const linkSchema = {
  title: 'Link',
  properties: {
    name: {},
    uri: {},
    type: {
      enum: ['PRIMARY', 'DANGER', 'GOOD'],
      default: ['GOOD']
    }
  }
}

const schema = {
  definitions: {
    user: userSchema
  },
  title: 'Todo',
  required: ['title'],
  properties: {
    title: {
      title: 'Title',
      description: 'Something your special :)',
      default: 'A new task'
    },
    tags: {
      title: 'Tags',
      description: 'Tags for search',
      items: { title: 'Tag', type: 'string' }
    },
    party: {
      enum: ['CAT', 'DOG', 'OCTCAT'],
      default: 'CAT'
    },
    user: {
      title: 'Your Profile',
      $ref: '#/definitions/user'
    },
    array: {
      title: 'Extra Users',
      items: { $ref: '#/definitions/user' }
    }
  }
}

export default { schema }
