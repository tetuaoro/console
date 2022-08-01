import type { NextPage } from "next"
import { Col, Container, Row } from "react-bootstrap"
import FormComponent from "@components/form"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const Page: NextPage = () => {
  return (
    <Container as="main" fluid className="bg-dark text-light pb-5">
      <center>
        <h1 className="my-5">Console Rao Web</h1>
      </center>
      <Row>
        <Col sm={9} md={7} lg={5} xxl={3} className="mx-auto">
          <FormComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Page
