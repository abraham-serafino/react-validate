import React, { Fragment } from "react"

// You can also make up your own rules! :)
const required = (value) => {
  return !value ? "required" : null
}

const Validate = ({ value, rules = [], apply = true, children }) => {
  if (rules && ! Array.isArray(rules)) {
    throw new Error("Rules prop must be an array")
  }

  return (
    <Fragment>
    {children}

    {apply ? <ul className="validationError" style={{
      fontSize: "0.75em",
      color: "red",
      listStyle: "none"
      }}>

      {rules.map((rule, i) => (<li key={i}>{rule(value)}</li>))}

    </ul> : null}
    </Fragment>
    )
}

// import { Validate, required } from "./Validate.js"

const Example = () => {
  const [state, setState] = useState({
    name: "",
    shouldApplyValidation: false
  })

  const handleSubmit = (e) => {
    e.preventDefault
    setState({ ...state, shouldApplyValidation: true })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Validate
          rules={[required]}
          value={state.name}
          apply={state.shouldApplyValidation}
          >

        <input value={name} onChange={handleChangeName} />
      </Validate>
    </form>
  )
}

export { Validate,
        required
        }
