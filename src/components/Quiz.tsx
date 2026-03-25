import { useState } from "react"
import QUESTIONS from "../questions.js"

// type Props = {}

const Quiz = () =>
  // props: Props
  {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length

    return (
      <div className="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers"></ul>
      </div>
    )
  }

export default Quiz
