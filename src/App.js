import React, { Component } from 'react';
import Form from './Form'
import './App.css';
import complement from './utils/complement'
import { Header, Icon, Button, Segment, Dimmer, Loader, Step } from 'semantic-ui-react'

const userSchema = {
  title: 'User',
  description: 'User profile',
  properties: {
    name: {},
    pass: { 　description: 'Your awesom password!' 　},
    age: { type: 'number' },
    friends: {
      title: 'Friends',
      items: {
        title: 'Friend',
        $ref: '#/definitions/user',
      },
    }
  }
}

const linkSchema = {
  title: 'Link',
  properties: {
    name: {},
    uri: {},
  }
}

const schema = {
  definitions: {
    user: userSchema,
  },
  title: "Todo",
  required: ["title"],
  properties: {
    title: {
      title: "Title",
      description: 'Something your special :)',
      default: "A new task"
    },
    done: {
      type: "boolean",
      title: "Done?",
      default: false
    },
    tags: {
      title: 'Tags',
      description: 'Tags for search',
      items: { title: 'Tag', type: 'string' }
    },
    links: {
      title: 'Links',
      description: 'Your favorite links!',
      items: linkSchema,
    },
    party: {
      enum: ['CAT', 'DOG', 'OCTCAT'],
      default: 'CAT',
    },
    user: {
      title: 'Your Profile',
      $ref: '#/definitions/user',
    },
    array: {
      title: 'Extra Users',
      items: { $ref: '#/definitions/user' },
    },
  }
}

class App extends Component {
  render() {
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
        <div className="ui container">
          <Form schema={schema}>
            <Button primary icon="mail">Submit</Button>
            <Button icon="mail">Cancel</Button>
          </Form>
        </div>
    </div>;
  }
}

export default App;
