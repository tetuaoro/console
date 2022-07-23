import type { NextApiRequest, NextApiResponse } from "next"
import Contrat from "@components/contrat"
import { renderToString } from "@react-pdf/renderer"
import { createTransport } from "nodemailer"

const contratProps = {
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

const mailConfig = {
  host: "box.rao-nagos.pf",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@rao-nagos.pf",
    pass: process.env["NOREPLY_PASSWORD"],
  },
}
const transporter = createTransport(mailConfig)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const content = Contrat(contratProps)
  let contrat = ""
  if (content) contrat = await renderToString(content)
  res.setHeader("Content-Type", "text/plain")
  const getDate = () => {
    const date = new Date()
    const concat = date.toDateString() + " " + date.getHours() + " " + date.getMinutes()
    return concat.replaceAll(" ", "_")
  }
  const filename = `"rao_web_contract_${getDate()}.pdf"`

  const to = "tetuaorolenoir@gmail.com"
  transporter.sendMail({
    from: mailConfig.auth.user,
    to,
    subject: "Devis",
    text: "Le pdf est attaché ?",
    attachments: [
      {
        filename,
        content: contrat,
        contentType: "application/pdf",
      },
    ],
  })

  res.status(200).send("mail sent to " + to)
}

export default handler
