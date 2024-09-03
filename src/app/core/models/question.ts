import { YesNo } from '../enums'

export interface QuestionAnswer {
    value: YesNo
    nextStep: Question
}

export interface BaseQuestion {
    id: number
}

export interface ChainQuestion extends BaseQuestion {
    question: string
    answers: QuestionAnswer[]
}

export interface FinalQuestion extends BaseQuestion {
    result: string
}

export type Question = ChainQuestion | FinalQuestion
