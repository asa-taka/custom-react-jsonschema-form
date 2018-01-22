import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import Form from './Form'

/**
 * Features
 * 
 *   1. Close on submit succeeded
 *   2. Loading indicator in submit button
 */
export default class ModalForm extends React.Component {

  static get defaultProps() {
    return {
      Form,
      trigger: <Button content="Launch Form on Modal" icon="external" secondary />
    }
  }

  constructor() {
    super()
    this.state = { open: false, loading: false }
    this.open = () => this.setState({ open: true })
    this.close = () => this.setState({ open: false })
    this.onSubmitSucceeded = () => {
      this.setState
      this.close()
    }
  }

  render() {
    const { Form, trigger, form, ...props } = this.props
    return (
      <Modal
        trigger={trigger}
        header="Modal Integration (Close on Submit Succeeded)"
        open={this.state.open}
        onOpen={this.open}
        closeIcon
        dimmer="blurring"
        onClose={this.close}>
        <Modal.Header>
          Modal Integration (Close on Submit Succeeded)
        </Modal.Header>
        <Modal.Content>
          <Form {...props} onSubmitSucceeded={this.close} />
        </Modal.Content>
      </Modal>
    )
  }
}