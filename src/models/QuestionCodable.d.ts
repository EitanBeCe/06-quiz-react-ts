import { QUESTIONS } from "../questions.js"

// export type Answer = (typeof QUESTIONS)[number]["answers"][number]

export type Questions = typeof QUESTIONS
export type Question = Questions[number]
// export type Answers = Question["answers"]
// export type Answer = Answers[number]
export type Answer = Question["answers"][number]
