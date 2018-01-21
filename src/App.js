import React, { Component } from 'react'
import Form from './Form'
import './App.css'
import {
  Icon,
  Button,
  Segment,
  Container,
  Menu,
  Header
} from 'semantic-ui-react'

import schema from './schema'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment className="AppHeader" inverted vertical>
          <Container>
            <h1>Custamizing react-jsonschema-form for Semantic UI ♡</h1>
          </Container>
        </Segment>
        <Segment vertical>
          <div className="ui container">
            <Form schema={schema}>
              <Button primary>
                <Icon name="mail" />Submit
              </Button>
              <Button>Cancel</Button>
            </Form>
          </div>
        </Segment>
        <Segment vertical inverted>
          <Container>
            <h2>Powered by:</h2>
            <ul>
              <li>
                <a href="https://github.com/mozilla-services/react-jsonschema-form">
                  mozilla-services/react-jsonschema-form
                </a>
              </li>
              <li>
                <a href="https://github.com/Semantic-Org/Semantic-UI/tree/1.0">
                  Semantic-Org/Semantic-UI
                </a>
              </li>
            </ul>
            <h3>Author</h3>
            <a href="https://github.com/asa-taka/custom-react-jsonschema-form">
              asa-taka/custom-react-jsonschema-form
            </a>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default App
