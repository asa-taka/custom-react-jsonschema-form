import React from "react"
import Form from "react-jsonschema-form"
import "./Form.css"
import complement from "./utils/complement"
import { Button, Icon } from "semantic-ui-react"
import { withProps } from "recompose"

const composedTypes = ["object", "array"]
const distinctComposedType = type => composedTypes.includes(type)

function FieldTemplate(props) {
  const Template = distinctComposedType(props.schema.type)
    ? ComposedFieldTemplate
    : PrimitiveFieldTemplate
  return <Template {...props} />
}

function ComposedFieldTemplate(props) {
  const { classNames } = props
  return (
    <div className={classNames + " field-comp"}>
      <div className="field-heading">
        <h3>{props.label}</h3>
        <FieldHelper {...props} />
      </div>
      {props.children}
    </div>
  )
}

function PrimitiveFieldTemplate(props) {
  const { classNames } = props
  return (
    <div className={classNames + " field-prim"}>
      <label>
        {props.label}
        {props.required && "*"}
      </label>
      <div className="field-value ui input fluid">{props.children}</div>
      <FieldHelper {...props} />
    </div>
  )
}

function FieldHelper(props) {
  const {
    rawDescription,
    description,
    rawErrors,
    errors,
    rawHelp,
    help
  } = props
  if (!rawDescription && !rawErrors && !rawHelp) return null
  return (
    <div className="field-help">
      {rawDescription && <div>{rawDescription}</div>}
      {rawErrors && errors}
      {rawHelp && rawHelp}
    </div>
  )
}

function ArrayFieldTemplate(props) {
  const { title, items, schema } = props
  const itemName = schema.items.title
  return (
    <React.Fragment>
      {props.items.map(elm => (
        <div className="array-item">
          {elm.children}
          <Button
            className="array-rm-item"
            icon="delete"
            onClick={elm.onDropIndexClick(elm.index)}
          />
        </div>
      ))}
      {props.canAdd && (
        <Button primary onClick={props.onAddClick}>
          <Icon name="plus" /> Add {itemName}
        </Button>
      )}
    </React.Fragment>
  )
}

function ObjectFieldTemplate(props) {
  const { title, description, properties } = props
  const tyeps = Object.keys(props.schema.properties).map(s => s.type)
  return (
    <React.Fragment>
      {properties.map((elm, i) => (
        <React.Fragment className="field-object-prop" key={i}>
          {elm.content}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

const onSubmit = event => {
  return console.warn("Form.onSubmit is not defined", event.formData)
}

export default withProps(({ schema }) => ({
  schema: complement(schema),
  FieldTemplate,
  ArrayFieldTemplate,
  ObjectFieldTemplate,
  onSubmit,
}))(Form)
