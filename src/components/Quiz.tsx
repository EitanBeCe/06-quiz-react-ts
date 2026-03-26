import { useState } from "react"
import { QUESTIONS } from "../questions.js"
import { Answer } from "../models/QuestionCodable.js"

// type Props = {}

const Quiz = () =>
  // props: Props
  {
    const [userAnswers, setUserAnswers] = useState<Answer[]>([])

    const activeQuestionIndex = userAnswers.length
    const i = activeQuestionIndex

    const handleSelectedAnswer = (selectedAnswer: Answer) => {
      setUserAnswers(prev => [...prev, selectedAnswer])
    }

    return (
      <div className="question">
        <h2>{QUESTIONS[i].text}</h2>
        <ul id="answers">
          {QUESTIONS[i].answers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default Quiz
