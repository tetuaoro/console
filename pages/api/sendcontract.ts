import type { NextApiRequest, NextApiResponse } from "next"
import type SMTPTransport from "nodemailer/lib/smtp-transport"
import { renderToStream } from "@react-pdf/renderer"
import { createTransport } from "nodemailer"
import Contrat, { ContratProps } from "@server/contrat"
import { logger, getDate } from "@libs/functions"
import MJML from "@server/mjml"

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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const contratProps: ContratProps = req.body
    const to = contratProps.clientEmail
    let contrat: any
    res.setHeader("Content-Type", "text/plain")

    const callBackTransporter = (error: Error | null, info: SMTPTransport.SentMessageInfo) => {
      if (error) {
        logger("err", "transporter logger error", error)
        res.status(500).send("Something happened when sending message !\r\n")
      } else {
        logger("log", "transporter logger info", info)
        res.status(200).send(`mail sent to ${to}\r\n`)
      }
    }

    const { html, text } = MJML

    try {
      contrat = await renderToStream(Contrat(contratProps) as any)
      const filename = `raoWebContract_${getDate()}.pdf`
      transporter.sendMail(
        {
          from: `Do not Reply <${from}>`,
          to,
          subject: "Contrat de conception d'un site web",
          text,
          html,
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
      logger("err", "logger renderToStream", error)
      res.status(500).send("Something happened when rendering !\r\n")
    }
  } catch (error) {
    logger("err", error)
    res.status(500).send("Something broken !\r\n")
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}

export default handler
