import moment from 'moment'
// import { enUS, vi } from "date-fns/locale"
// import { format as formatDate } from "date-fns"
// import { floor as _floor, mapKeys, round as _round, snakeCase } from "lodash"
// import { DEFAULT_TZ } from "@config/constants"
// import { hoursToMilliseconds } from "date-fns"

// import { localStore } from "../localStorage"

const formatTime = (time: any) => {
  const d = moment(time).format('D')
  const m = moment(time).format('M')
  const y = moment(time).format('YYYY')
  return `${d} Tháng ${m}, ${y}`
}



export { formatTime }
