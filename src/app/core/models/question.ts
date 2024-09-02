import { YesNo } from '../enums/yes-no'

export interface BaseQuestion {
    level: number
    question: string
    answers: YesNo[]
}

export interface ChainQuestion extends BaseQuestion {
    nextQuestions: Question[]
}

export interface FinalQuestion extends BaseQuestion {
    results: string[]
}

export type Question = ChainQuestion | FinalQuestion
