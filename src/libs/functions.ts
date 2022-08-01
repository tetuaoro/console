export const getDate = () => {
  const date = new Date()
  const concat = date.toDateString() + " " + date.getHours() + " " + date.getMinutes()
  return concat.replaceAll(" ", "_")
}
type LogCall = "warn" | "log" | "err" | "info"

export const logger = (call: LogCall, ...params: any[]) => {
  call === "log" && console.log(new Date().toString(), ...params)
  call === "err" && console.error(new Date().toString(), ...params)
  call === "info" && console.info(new Date().toString(), ...params)
  call === "warn" && console.warn(new Date().toString(), ...params)
}
