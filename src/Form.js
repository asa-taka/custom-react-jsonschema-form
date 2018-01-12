import React from 'react'
import Form from 'react-jsonschema-form'
import './Form.css'
import { withProps } from 'recompose'

function FieldTemplate(props) {
  const {
    id, classNames, label, help, required, description, errors, children,
  } = props;
  const type = props.schema.type
  const isSimpleType = type !== 'object' && type !== 'array'
  return (
    <div className={classNames}>
      <div className="field-main">
        {isSimpleType && <label htmlFor={id}>{label}{required ? "*" : null}</label>}
        {children}
      </div>
      <div className="field-help">
        {isSimpleType && <div className="field-desc">{description}</div>}
        {errors}
        {help}
      </div>
    </div>
  );
}

function ArrayFieldTemplate(props) {
  const { title, items, schema } = props
  const itemName = schema.items.title
  return (
    <React.Fragment>
      <h3 className="form-array-title">{title}</h3>
      <div className="field-desc">{schema.description}</div>
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
      <div className="form-object-title">{title}</div>
      {description}
      {properties.map((elm, i) =>
        <div key={i}>{elm.content}</div>
      )}
    </React.Fragment>
  );
}

const onSubmit = event => {
  return console.warn('Form.onSubmit is not defined', event.formData)
}

export default withProps({
  FieldTemplate,
  ArrayFieldTemplate,
  ObjectFieldTemplate,
  onSubmit,
})(Form)
