import type { NextApiRequest, NextApiResponse } from "next"
import type SMTPTransport from "nodemailer/lib/smtp-transport"
import { renderToStream } from "@react-pdf/renderer"
import { createTransport } from "nodemailer"
import Contrat from "@server/contrat"
import logger from "@libs/logger"

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

const from = "noreply@rao-nagos.pf"
const mailConfig: SMTPTransport.Options = {
  host: "box.rao-nagos.pf",
  port: 465,
  secure: true,
  auth: {
    user: from,
    pass: process.env["NOREPLY_PASSWORD"] || "",
  },
}
const transporter = createTransport(mailConfig)

const convertDocumentToBuffer = async (document: any): Promise<Buffer> => {
  const stream = await renderToStream(document)
  return new Promise((resolve, reject) => {
    let buffers: Uint8Array[] = []
    stream.on("data", (data) => {
      buffers.push(data)
    })
    stream.on("end", () => {
      resolve(Buffer.concat(buffers))
    })
    stream.on("error", reject)
  })
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const to = "tetuaorolenoir@gmail.com"
  let contrat: any
  res.setHeader("Content-Type", "text/plain")

  const getDate = () => {
    const date = new Date()
    const concat = date.toDateString() + " " + date.getHours() + " " + date.getMinutes()
    return concat.replaceAll(" ", "_")
  }

  const callBackTransporter = (error: Error | null, info: SMTPTransport.SentMessageInfo) => {
    if (error) {
      logger("ERROR", "transporter logger error", error)
      res.status(500).send("Something happened when sending message !\r\n")
    } else {
      logger("LOG", "transporter logger info", info)
      res.status(200).send(`mail sent to ${to}\r\n`)
    }
  }

  try {
    contrat = await renderToStream(Contrat(contratProps) as any)
    const filename = `raoWebContract_${getDate()}.pdf`
    transporter.sendMail(
      {
        from: `Do not Reply <${from}>`,
        to,
        subject: "Votre devis estimé",
        text: "Le pdf est attaché ?",
        attachments: [
          {
            filename,
            content: contrat,
            contentType: "application/pdf",
          },
        ],
      },
      callBackTransporter
    )
  } catch (error) {
    logger("ERROR", "logger renderToStream", error)
    res.status(500).send("Something happened when rendering !\r\n")
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}

export default handler
