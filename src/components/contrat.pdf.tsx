import type { GetServerSideProps } from "next"
import { renderToString } from "@react-pdf/renderer"
import PDFDocument from "./contrat"

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const contract = await renderToString(<PDFDocument />)

  res.setHeader("Content-Type", "application/pdf")
  res.write(contract)
  res.end()

  return {
    props: {},
  }
}

const Contract = () => {}

export default Contract
