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

const isSuccessRes = (res: { status: string | number } = { status: '' }) =>
  res.status === 'success' || (res?.status >= 200 && res?.status <= 299)

export { formatTime, isSuccessRes }
