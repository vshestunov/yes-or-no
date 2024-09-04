import { YesNo } from '../enums'

export interface QuestionAnswer {
    id: string
    value: YesNo
    nextStep: Question
}

export interface BaseQuestion {
    id: string
}

export interface ChainQuestion extends BaseQuestion {
    question: string
    answers: QuestionAnswer[]
}

export interface FinalQuestion extends BaseQuestion {
    result: string
}

export type Question = ChainQuestion | FinalQuestion
