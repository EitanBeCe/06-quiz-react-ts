import { useCallback, useState } from "react"
import { QUESTIONS } from "../questions.js"
import { Answer } from "../models/QuestionCodable.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import ProgressBar from "./ProgressBar.js"

// type Props = {}

enum AnswerStatus {
  CORRECT,
  WRONG,
  NONE
}

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

  const shuffledAnswers = [...QUESTIONS[i].answers]
  shuffledAnswers.sort(() => Math.random() - 0.5)

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar
          key={i} // Key for rernder on question change
          timeoutMs={5_000}
          handleOnTimeout={handleOnTimeout}
        />

        <h2>{QUESTIONS[i].text}</h2>

        <ul id="answers">
          {shuffledAnswers.map(answer => (
            <li key={answer} className="answer">
              <button
                className={
                  answer === QUESTIONS[i].answers[0] && answerStatus === AnswerStatus.CORRECT
                    ? "correct"
                    : answer === QUESTIONS[i].answers[0] && answerStatus === AnswerStatus.WRONG
                    ? "wrong"
                    : ""
                }
                onClick={() => handleSelectedAnswer(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Quiz
