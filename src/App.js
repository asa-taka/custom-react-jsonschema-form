import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'
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

import * as settings from './schemas/index'

const examples = Object.entries(settings).map(([key, props]) => ({
  path: '/' + key,
  title: props.schema.title,
  props,
}))

const AppMenu = withRouter(({ location }) => (
  <Menu inverted pointing secondary>
    {examples.map(ex => (
      <Menu.Item
        key={ex.path}
        as={Link}
        to={ex.path}
        active={location.pathname === ex.path}>
        {ex.title}
      </Menu.Item>
    ))}
  </Menu>
))

const AppRoutes = () => (
  <Switch>
    {examples.map(ex => (
      <Route
        exact
        key={ex.path}
        path={ex.path}
        render={() => (
          <Form {...ex.props}>
            <Button positive>
              <Icon name="mail" />Submit
            </Button>
            <Button>Cancel</Button>
          </Form>
        )}
      />
  ))}
 </Switch>
)

class App extends Component {
  render() {
    return <Router>
        <div className="App">
          <Segment className="AppHeader" inverted vertical>
            <Container>
              <h1>Custamizing react-jsonschema-form for Semantic UI ♡</h1>
              <AppMenu />
            </Container>
          </Segment>
          <Segment vertical>
            <div className="ui container">
              <AppRoutes />
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
      </Router>
  }
}

export default App
