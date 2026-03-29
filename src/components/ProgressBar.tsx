import { useEffect, useState } from "react"
import { useOnMount } from "../eitansHooks/useOnMount.js"

type Props = {
  timeoutMs: number
  handleOnTimeout: () => void
  // questionIndex: number
}

const ProgressBar = ({ timeoutMs, handleOnTimeout }: Props) => {
  const [remaningTime, setRemaningTime] = useState(timeoutMs)

  useOnMount(() => {
    const tik = 100

    const interval = setInterval(() => {
      setRemaningTime(prev => prev - tik)
    }, tik)

    return () => clearInterval(interval)
  })

  // Made this rerender by key={questionIndex}
  // Reset timer on question index change. When user pick an answer and goes to a new question.
  // useEffect(() => {
  //   setRemaningTime(timeoutMs)
  // }, [questionIndex, timeoutMs])

  // On timeout
  useEffect(() => {
    if (remaningTime <= 0) {
      handleOnTimeout()
    }
  }, [remaningTime, handleOnTimeout])

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
