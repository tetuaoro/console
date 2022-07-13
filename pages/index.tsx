import { ContratProps } from "@components/contrat"
import type { NextPage } from "next"
import dynamic from "next/dynamic"
import { Container } from "react-bootstrap"

const PDFDocument = dynamic(() => import("@components/browserViewPDF"), { ssr: false })

const Page: NextPage = () => {
  /* const object = {
    name: "k",
    nam: "o",
    na: "i",
  } */

  // https://stackoverflow.com/questions/5072136/javascript-filter-for-objects
  // const object2 = Object.fromEntries(Object.entries(object).filter(([key, _value]) => key != "na"))

  const document: ContratProps = {
    header: "05 novembre 2021 - Rao Nagos - N° T.A.H.I.T.I D75938",
    title: "CONTRAT DE CONCEPTION D'UN SITE WEB",
    clientName: "Manea tahiti services",
    subClientName: "Tetuaoro Lenoir né le 05 novembre 1995",
    proName: "Rao Nagos - Service Rao Web",
    domainName: "maneatahitiservices.pf",
    hosting: { name: "Vercel", link: "https://vercel.com" },
    contract: {
      startTime: "1er août 2022",
      payment: "total de 0 XPF non-remboursable à la date du début du contrat",
      bonus: "score de gtmetrix.com pour la page d'accueil ou page central : un score de C augmente le prix de 10 %, B de 20 % et A de 30 % - paiement à la livraison du site",
    },
  }

  return (
    <Container as="main" fluid className="vh-100 bg-dark text-light">
      <section>
        <h1>Console Rao Web</h1>
        <section className="vh-100">
          <PDFDocument width="100%" height="100%" showToolbar={false} document={document} />
        </section>
      </section>
      <section>
        <p>Text</p>
      </section>
    </Container>
  )
}

export default Page
