import React from 'react'
import Form from 'react-jsonschema-form'
import './Form.css'
import complement from './utils/complement'
import { withProps } from 'recompose'

function FieldTemplate(props) {
  const isComposedType = ['object', 'array'].includes(props.schema.type)
  const Template = isComposedType ? ComposedFieldTemplate : PrimitiveFieldTemplate
  return <Template {...props} />
}

function ComposedFieldTemplate(props) {
  const { classNames } = props
  return (
    <div className={classNames + ' field-comp'}>
      <h3>{props.label}</h3>
      <FieldHelper {...props} />
      {props.children}
    </div>
  )
}

function PrimitiveFieldTemplate(props) {
  const { classNames } = props
  return (
    <div className={classNames + ' field-prim'}>
      <label>{props.label}{props.required && "*"}</label>
      <div className="field-value">{props.children}
        <FieldHelper {...props} />
      </div>
    </div>
  )
}

function FieldHelper(props) {
  const {
    rawDescription, description,
    rawErrors, errors,
    rawHelp, help
  } = props
  if (!rawDescription && !rawErrors && !rawHelp) return null
  return (
    <div className="field-help">
      {rawDescription && description}
      {rawErrors && errors}
      {rawHelp && help}
    </div>
  )
}

function ArrayFieldTemplate(props) {
  const { title, items, schema } = props
  const itemName = schema.items.title
  return (
    <React.Fragment>
      {props.items.map(elm =>
        <div className="array-item">
          {elm.children}
          <button
            title="remove this item"
            className="form-rm-item"
            onClick={elm.onDropIndexClick(elm.index)}
          >✖︎</button>
        </div>
      )}
      {props.canAdd &&
        <button className="form-add-item" onClick={props.onAddClick}>
          + Add {itemName}
        </button>
      }
    </React.Fragment>
  );
}

function ObjectFieldTemplate(props) {
  const { title, description, properties } = props
  return (
    <React.Fragment>
      {properties.map((elm, i) =>
        <div key={i}>{elm.content}</div>
      )}
    </React.Fragment>
  );
}

const onSubmit = event => {
  return console.warn('Form.onSubmit is not defined', event.formData)
}

export default withProps(({ schema }) => ({
  schema: complement(schema),
  FieldTemplate,
  ArrayFieldTemplate,
  ObjectFieldTemplate,
  onSubmit,
}))(Form)
