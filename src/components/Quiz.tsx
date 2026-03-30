import { useCallback, useState } from "react"
import { AnswerStatus, QUESTIONS } from "../questions.js"
import { Answer } from "../models/QuestionCodable.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import ProgressBar from "./ProgressBar.js"
import Answers from "./Answers.js"

// type Props = {}

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<(Answer | null)[]>([])
  const [answerStatus, setAnswerStatus] = useState(AnswerStatus.NONE)

  // const activeQuestionIndex = answerStatus === AnswerStatus.NONE ? userAnswers.length : userAnswers.length - 1
  const activeQuestionIndex = userAnswers.length
  const i = activeQuestionIndex

  const handleSelectedAnswer = (selectedAnswer: Answer) => {
    if (selectedAnswer === QUESTIONS[i].answers[0]) {
      setAnswerStatus(AnswerStatus.CORRECT)
    } else {
      setAnswerStatus(AnswerStatus.WRONG)
    }

    setTimeout(() => {
      setAnswerStatus(AnswerStatus.NONE)
      setUserAnswers(prev => [...prev, selectedAnswer])
    }, 1000)
  }

  const handleOnTimeout = useCallback(() => {
    setUserAnswers(prev => [...prev, null])
  }, [])

  const isQuizComplete = activeQuestionIndex >= QUESTIONS.length

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    )
  }

  return (
    <div id="quiz">
      <div
        key={i} // Key for rernder on question change
        id="question"
      >
        <ProgressBar
          // key={i}
          timeoutMs={5_000}
          handleOnTimeout={handleOnTimeout}
        />

        <h2>{QUESTIONS[i].text}</h2>

        <Answers
          // key={i + 1}
          answers={QUESTIONS[i].answers}
          // seletedAnswer={userAnswers[userAnswers.length - 1]}
          answerStatus={answerStatus}
          handleSelectedAnswer={handleSelectedAnswer}
        />
      </div>
    </div>
  )
}

export default Quiz
