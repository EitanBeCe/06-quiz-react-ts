import { useState } from "react"
import { QUESTIONS } from "../questions.js"
import { Answer } from "../models/QuestionCodable.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import ProgressBar from "./ProgressBar.js"

// type Props = {}

const Quiz = () =>
  // props: Props
  {
    const [userAnswers, setUserAnswers] = useState<(Answer | null)[]>([])

    const activeQuestionIndex = userAnswers.length
    const i = activeQuestionIndex

    const handleSelectedAnswer = (selectedAnswer: Answer) => {
      setUserAnswers(prev => [...prev, selectedAnswer])
    }

    const isQuizComplete = activeQuestionIndex === QUESTIONS.length

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
          <h2>{QUESTIONS[i].text}</h2>

          <ul id="answers">
            {shuffledAnswers.map(answer => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectedAnswer(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>

          <ProgressBar setUserAnswers={setUserAnswers} />
        </div>
      </div>
    )
  }

export default Quiz
