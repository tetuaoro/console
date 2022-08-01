import React from "react"
import { Alert } from "react-bootstrap"


export const MessageContext = React.createContext({
    
})

interface Props {
  message: string
  variant?: string
}

const Component = (props: Props) => {
  return (
    <div className="position-fixed bottom-0 start-0">
      <Alert variant={props.variant || "primary"}>{props.message}</Alert>
    </div>
  )
}

export default Component
