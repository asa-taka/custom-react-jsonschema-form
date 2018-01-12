import React from 'react'
import Form from 'react-jsonschema-form'
import './Form.css'
import { withProps } from 'recompose'

function FieldTemplate(props) {
  const {id, classNames, label, help, required, description, errors, children} = props;
  console.log(classNames)
  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}{required ? "*" : null}</label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
}

function ArrayItemFieldTemplate(props) {

}

function ArrayFieldTemplate(props) {
  const { title, items, schema } = props
  const itemName = schema.items.title
  return (
    <div className="array">
      <h3>{title}</h3>
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
    </div>
  );
}

function ObjectFieldTemplate(props) {
  const { title, description, properties } = props
  return (
    <div>
      <div className="form-object-title">{title}</div>
      {description}
      {properties.map((elm, i) =>
        <div key={i}>{elm.content}</div>
      )}
    </div>
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
