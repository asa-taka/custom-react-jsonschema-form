import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'
import Form from './Form'
import './App.css'
import {
  Icon,
  Button,
  Segment,
  Container,
  Menu,
  Header,
  Message,
} from 'semantic-ui-react'
import complement from './utils/complement'
import Markdown from 'react-markdown'

import * as settings from './schemas/index'

const examples = Object.entries(settings).map(([key, setting]) => ({
  path: '/' + key,
  title: setting.props.schema.title,
  setting,
}))

const AppMenu = withRouter(({ location }) => (
  <Menu inverted secondary stackable>
    <Menu.Item as={Link} to="/">About</Menu.Item>
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

const renderForm = ({ props, description }) => (
  <React.Fragment>
    <Message>
      <Markdown source={description} />
    </Message>
    <Form {...props}>
      <Button positive>
        <Icon name="mail" />Submit
      </Button>
      <Button>Cancel</Button>
    </Form>
  </React.Fragment>
)

const AppAbout = () => <article>
  <h2>Welcome to my personal practice page :)</h2>
  <p>This is my personal project to practice to learn
    both of react-jsonschema-form and (really cute) Semantic UI.
    </p> 
    <p>
      react-jsonschema-form generate
    </p>
    <Message>
      {renderForm(settings['todo'])}
    </Message>
    ...from JSON Schema like below
    <pre>
      {JSON.stringify(complement(settings['todo'].props.schema), null, 2)}
    </pre>
</article>

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={AppAbout} />
    {examples.map(ex => (
      <Route
        exact
        key={ex.path}
        path={ex.path}
        render={() => renderForm(ex.setting)}
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
