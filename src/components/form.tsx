import type { ChangeEvent, FormEvent } from "react"
import type { ContratProps } from "@components/contrat"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { logger } from "@libs/functions"

const contract: ContratProps = {
  author: "Rao Web",
  header: "màj le 05 novembre 2021 - Rao Nagos - N° T.A.H.I.T.I D75938",
  title: "CONTRAT DE CONCEPTION D'UN SITE WEB",
  clientName: "Mon client name",
  subClientName: "Tetuaoro Lenoir né le 05 novembre 1995 (personne physique) ou Rao Nagos - N° T.A.H.I.T.I D75938 - (personne morale)",
  proName: "Rao Nagos - Service Rao Web",
  domainName: "ledomaine.pf",
  hosting: { name: "Vercel", link: "https://vercel.com" },
  contract: {
    startTime: "1er août 2022",
    payment: "total de 0 XPF non-remboursable à la date du début du contrat",
    bonus: "score de gtmetrix.com pour la page d'accueil ou page central : un score de C augmente le prix de 10 %, B de 20 % et A de 30 % - paiement à la livraison du site",
  },
  clientEmail: "",
}

const Component = () => {
  const [state, setState] = useState({ ...contract })
  const [btnText, setBtnText] = useState<string | null>(null)

  const handleState = (e: ChangeEvent<HTMLInputElement>) => {
    setState((state) => {
      const name = e.target.name
      switch (name) {
        case "startTime":
          return { ...state, contract: { ...state.contract, startTime: e.target.value } }
        case "payment":
          return { ...state, contract: { ...state.contract, payment: e.target.value } }
        case "bonus":
          return { ...state, contract: { ...state.contract, bonus: e.target.value } }
        default:
          return { ...state, [name]: e.target.value }
      }
    })
  }

  const handleForm = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/sendcontract", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
      const responseText = await response.text()
      setBtnText(responseText)

      if (response.status <= 400) {
        setState(contract)
      }
    } catch (error) {
      logger("err", error)
    }
  }

  return (
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
          <Form.Control as="textarea" rows={6} id="contractPayment" placeholder={contract.contract?.payment} name="payment" onChange={handleState} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="contractBonus">Contract bonus info</Form.Label>
          <Form.Control as="textarea" rows={6} id="contractBonus" placeholder={contract.contract?.bonus} name="bonus" onChange={handleState} />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Client email</Form.Label>
          <Form.Control id="email" type="email" name="clientEmail" onChange={handleState} />
        </Form.Group>

        <Button type="submit" variant="outline-primary">
          {btnText || "Send contract"}
        </Button>
      </fieldset>
    </Form>
  )
}

export default Component
