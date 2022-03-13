import React from 'react'
import { Alert, Toast } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Alerts() {
  const tab = useSelector(state => state.alertReducer)
  return (

    <div>
      <br />
      <br />
      <br />
      <br />


      {
        tab.map((variant, idx) => (
          <Alert type={variant.typeAlert} headline="Oh Shit" key={idx}>
            {variant.msg}
          </Alert>
        ))
      }
    </div>
  )
}

export default Alerts