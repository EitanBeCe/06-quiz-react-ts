import { useRef } from "react"
import { Answer } from "../models/QuestionCodable.js"
import { AnswerStatus } from "../questions.js"

type Props = {
  answers: readonly Answer[]
  // seletedAnswer: Answer | null
  answerStatus: AnswerStatus
  handleSelectedAnswer: (selectedAnswer: Answer) => void
}

const Answers = ({ answers, answerStatus, handleSelectedAnswer }: Props) => {
  const shuffledAnswers = useRef<Answer[]>([...answers].sort(() => Math.random() - 0.5))
  // const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5)
  // const [shuffledAnswers, setShuffledAnswers] = useState([...answers].sort(() => Math.random() - 0.5))

  // useEffect(() => {
  //   if (shuffledAnswers.some(ans => ans != answers[0])) {
  //     setShuffledAnswers([...answers])
  //   }
  // }, [answers])

  return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => (
        // {answers?.map(answer => (
        <li key={answer} className="answer">
          <button
            className={
              answer === answers[0] && answerStatus !== AnswerStatus.NONE ? "correct" : ""
              // answer === answers[0] && answerStatus === AnswerStatus.CORRECT
              //   ? "correct"
              //   : answer === answers[0] && answerStatus === AnswerStatus.WRONG
              //   ? "wrong"
              //   : ""
            }
            onClick={() => handleSelectedAnswer(answer)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Answers
