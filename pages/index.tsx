import type { NextPage } from "next"
import type { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { BlobProvider } from "@react-pdf/renderer"
import Contract, { ContratProps } from "@components/contrat"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

const contract: ContratProps = {
  header: "màj le 05 novembre 2021 - Rao Nagos - N° T.A.H.I.T.I D75938",
  title: "CONTRAT DE CONCEPTION D'UN SITE WEB",
  clientName: "Manea tahiti services",
  subClientName: "Tetuaoro Lenoir né le 05 novembre 1995 (personne physique) ou Rao Nagos - N° T.A.H.I.T.I D75938 - (personne morale)",
  proName: "Rao Nagos - Service Rao Web",
  domainName: "maneatahitiservices.pf",
  hosting: { name: "Vercel", link: "https://vercel.com" },
  contract: {
    startTime: "1er août 2022",
    payment: "total de 0 XPF non-remboursable à la date du début du contrat",
    bonus: "score de gtmetrix.com pour la page d'accueil ou page central : un score de C augmente le prix de 10 %, B de 20 % et A de 30 % - paiement à la livraison du site",
  },
}

const Page: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState({ ...contract })

  const handleState = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    setState((state) => {
      const name = e.target.name
      if (name === "startTime") return { ...state, contract: { ...state.contract, startTime: e.target.value } }
      if (name === "payment") return { ...state, contract: { ...state.contract, payment: e.target.value } }
      if (name === "bonus") return { ...state, contract: { ...state.contract, bonus: e.target.value } }
      return { ...state, [name]: e.target.value }
    })
  }

  const handleForm = (e: FormEvent) => {
    e.preventDefault()
    setLoading(false)
  }

  return (
    <Container as="main" fluid className="bg-dark text-light pb-5">
      <center>
        <h1 className="my-5">Console Rao Web</h1>
      </center>
      <Row>
        <Col sm={9} md={7} lg={5} xxl={3} className="mx-auto">
          <Form onSubmit={handleForm}>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractAuthor">Author</Form.Label>
                <Form.Control id="contractAuthor" placeholder={contract.author} name="author" onChange={handleState} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractConceptor">Conceptor name</Form.Label>
                <Form.Control id="contractConceptor" placeholder={contract.proName} name="proName" onChange={handleState} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractSubname">{"Subname for « représentant(e) » field"}</Form.Label>
                <Form.Control id="contractSubname" placeholder={contract.subClientName} name="subClientName" onChange={handleState} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractTitle">Title</Form.Label>
                <Form.Control id="contractTitle" placeholder={contract.title} name="title" onChange={handleState} />
              </Form.Group>
              <hr />
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractClient">Client name</Form.Label>
                <Form.Control id="contractClient" placeholder={contract.clientName} name="clientName" onChange={handleState} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractDomain">Client domain name</Form.Label>
                <Form.Control id="contractDomain" placeholder={contract.domainName} name="domainName" onChange={handleState} />
              </Form.Group>
              <hr />
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractStart">Contract start at</Form.Label>
                <Form.Control id="contractStart" type="date" name="startTime" onChange={handleState} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractPayment">Contract payment info</Form.Label>
                <Form.Control as="textarea" rows={6} id="contractPayment" name="payment" onChange={handleState} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contractBonus">Contract bonus info</Form.Label>
                <Form.Control as="textarea" rows={6} id="contractBonus" name="bonus" onChange={handleState} />
              </Form.Group>

              <Button type="submit" variant="outline-primary">
                Generate Contract
              </Button>
              {!loading && (
                <BlobProvider document={<Contract {...state} />}>
                  {({ loading, url }) =>
                    !loading &&
                    url && (
                      <a className="link-danger" download="rao_web_112021_contrat_conception.pdf" href={url}>
                        <span className="me-2">{"rao_web_112021_contrat_conception.pdf"}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-danger bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                          <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                          <path
                            fillRule="evenodd"
                            d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
                          />
                        </svg>
                      </a>
                    )
                  }
                </BlobProvider>
              )}
            </fieldset>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
