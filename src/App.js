import React, { Component } from 'react';
import Form from './Form'
import './App.css';

const userSchema = {
  title: 'User',
  type: "object",
  properties: {
    name: { type: "string" },
    pass: { type: "string" },
    age: { type: 'integer' },
    friends: {
      title: 'Friends',
      type: 'array',
      items: {
        title: 'Friend',
        $ref: '#/definitions/user',
      },
    }
  }
}

const schema = {
  definitions: {
    user: userSchema,
  },
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string",
      title: "Title",
      default: "A new task"
    },
    done: {
      type: "boolean",
      title: "Done?",
      default: false
    },
    tags: {
      title: 'Tags',
      type: 'array',
      items: { title: 'Tag', type: 'string' }
    },
    party: {
      type: 'string',
      enum: ['CAT', 'DOG', 'OCTCAT'],
      default: 'CAT',
    },
    user: {
      title: 'Your Profile',
      $ref: '#/definitions/user',
    },
    array: {
      title: 'Extra Users',
      type: "array",
      items: { $ref: '#/definitions/user' },
    },
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <Form schema={schema} />
        </div>
      </div>
    );
  }
}

export default App;
