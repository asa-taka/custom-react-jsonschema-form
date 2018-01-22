import React from 'react'
import OriginalForm from 'react-jsonschema-form'
import {
  FieldTemplate,
  ArrayFieldTemplate,
  ObjectFieldTemplate,
  ErrorList,
} from './templates'
import complement from '../utils/complement'
import { Button } from 'semantic-ui-react'
import classNames from 'classnames'
import './Form.css'
import { withState } from 'recompose'

const withLoadingState = withState('loading', 'setLoading', false)

const Form = withLoadingState(props => {

  const { loading, setLoading, onSubmitSucceeded, onSubmitFailed } = props

  // Feature 1: Completion Schema Types
  const schema = complement(props.schema)

  // Feature 2: onSubmitSucceeded/onSubmitFailed event handlers
  const onSubmit = ev => {
    setLoading(true)
    Promise.resolve(props.onSubmit(ev))
      .then(res => {
        setLoading(false)
        onSubmitSucceeded(res)
        return res
      })
      .catch(err => {
        setLoading(false)
        onSubmitFailed(err)
      })
  }

  // Feature 3: indicate loading condition on button
  const children = (
    <React.Fragment>
      <Button content="Submit" icon="mail forward" positive loading={loading} />
      {props.children}
    </React.Fragment>
  )

  const overrideProps = { schema, onSubmit, children }
  return <OriginalForm {...props} {...overrideProps} />
})

const delay = msec => {
  return new Promise(resolve => setTimeout(resolve, msec))
}

const onSubmit = ev => {
  console.warn('Form.onSubmit is not defined', ev.formData)
  return delay(1000) // simulate remote query
}

const onSubmitSucceeded = res => {
  return console.warn('Form.onSubmitSucceeded is not defined', res)
}

const onSubmitFailed = err => {
  return console.warn('Form.onSubmitFailed is not defined', err)
}

Form.defaultProps = {
  FieldTemplate,
  ArrayFieldTemplate,
  ObjectFieldTemplate,
  ErrorList,
  onSubmit,
  onSubmitSucceeded,
  onSubmitFailed,
}

export default Form
