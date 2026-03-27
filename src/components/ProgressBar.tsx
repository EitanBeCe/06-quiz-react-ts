import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Answer } from "../models/QuestionCodable.js"

type Props = { setUserAnswers: Dispatch<SetStateAction<(Answer | null)[]>> }

const TIMER = 20_000

const ProgressBar = ({ setUserAnswers }: Props) => {
  const [remaningTime, setRemaningTime] = useState(TIMER)

  if (remaningTime <= 0) {
    setUserAnswers(prev => [...prev, null])
  }

  useEffect(() => {
    const tik = 100

    const interval = setInterval(() => {
      setRemaningTime(prev => prev - tik)
    }, tik)

    return () => clearInterval(interval)
  }, [])

  return (
    <progress value={remaningTime} max={TIMER} />

    // <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-red-950/15 shadow-inner">
    //   <div
    //     className="h-full rounded-full bg-gradient-to-r from-amber-500 to-red-600 transition-[width] duration-75 linear"
    //     style={{ width: `${(remaningTime / TIMER) * 100}%` }}
    //   />
    // </div>
  )
}

export default ProgressBar
