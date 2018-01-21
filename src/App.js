import React, { Component } from 'react';
import Form from './Form'
import './App.css';
import { Icon, Button,  } from 'semantic-ui-react'

import schema from './schema'

class App extends Component {
  render() {
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
        <div className="ui container">
          <Form schema={schema}>
            <Button primary><Icon name="mail" />Submit</Button>
            <Button>Cancel</Button>
          </Form>
        </div>
    </div>;
  }
}

export default App;
