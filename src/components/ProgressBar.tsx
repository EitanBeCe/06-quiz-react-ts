import { useEffect, useState } from "react"
import { useOnChange } from "../eitansHooks/useOnChange.js"
import { useOnMount } from "../eitansHooks/useOnMount.js"

type Props = {
  timeoutMs: number
  onTimeout: () => void
  questionIndex: number
}

const ProgressBar = ({ timeoutMs, onTimeout, questionIndex }: Props) => {
  const [remaningTime, setRemaningTime] = useState(timeoutMs)

  useOnMount(() => {
    const tik = 100

    const interval = setInterval(() => {
      setRemaningTime(prev => prev - tik)
    }, tik)

    return () => clearInterval(interval)
  })

  // When user pick an answer and question i changes
  useOnChange(
    questionIndex,
    () => {
      setRemaningTime(timeoutMs)
    },
    [timeoutMs]
  )

  // On timeout
  useOnChange(
    remaningTime,
    newVal => {
      if (newVal <= 0) {
        onTimeout()
      }
    },
    [onTimeout],
    true
  )

  return (
    <progress value={remaningTime} max={timeoutMs} />

    // <div className="mt-r h-3 w-full overflow-hidden rounded-full bg-red-950/15 shadow-inner">
    //   <div
    //     className="h-full rounded-full bg-gradient-to-r from-amber-500 to-red-600 transition-[width] duration-75 linear"
    //     style={{ width: `${(remaningTime / TIMER) * 100}%` }}
    //   />
    // </div>
  )
}

export default ProgressBar
