type k = "LOG" | "ERROR" | "WARNING"

const logger = (output: k, ...message: any[]) => {
  if (!message) return
  if (output === "LOG") console.log(message)
  if (output === "ERROR") console.error(message)
  console.warn(message)
}

export default logger
