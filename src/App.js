import React, { Component } from 'react';
import Form from './Form'
import './App.css';
import complement from './utils/complement'
import { Header, Icon, Button, Segment, Dimmer, Loader, Step } from 'semantic-ui-react'

import schema from './schema'

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
