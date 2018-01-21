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
    rawErrors,
    errors,
    rawHelp,
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
  const { items, schema } = props
  const itemName = schema.items.title
  return (
    <React.Fragment>
      {items.map(elm => (
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
  return (
    <div className="field-object-props">
      {props.properties.map((elm, i) => (
        <React.Fragment key={i}>
          {elm.content}
        </React.Fragment>
      ))}
    </div>
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
