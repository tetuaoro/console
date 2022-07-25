import type { NextApiRequest, NextApiResponse } from "next"
import { html } from "@components/mjml"

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "text/plain")
  res.status(200).send(html)
}

// export const config = {
//   api: {
//     externalResolver: true,
//   },
// }

export default handler
