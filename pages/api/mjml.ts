import type { NextApiRequest, NextApiResponse } from "next"
import MJML from "@server/mjml"

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "text/html; charset=UTF-8")
  res.status(200).send(MJML.html)
}

// export const config = {
//   api: {
//     externalResolver: true,
//   },
// }

export default handler
